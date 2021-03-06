import 'babel-polyfill';
import ProductBase from '../library/Products/productsBase';
import InventoriesBase from '../library/Inventories/InventoriesBase';

let assert = require('chai').assert;

const products = new ProductBase();
const inventories = new InventoriesBase();

describe('Products', () => {
    describe('Products Base Library', () => {

        let createdItemId = null;

        it('Should create a new product', async () => {
            let result = await products.createProduct('Test Product', 'This is a test item', 'thumbnail.png', 'Dispatches in 2-4 days', 0, false, new Date("2018-03-31 02:00:07.525+01"), new Date("2018-03-31 02:00:07.525+01"));
            createdItemId = result.insertedId;
            return assert.equal(0, result.payload, result.msg);
        });

        it('Should find an inventory for the product', async () => {
            let result = await inventories.getInventoryByProductId(createdItemId);
            assert.equal(result.inventory.productIdentifer, createdItemId, result.msg);
        });

        it('Should update the previously made product', async () => {
            let result = await products.updateProductById(createdItemId, 'Test Product Updated', 'This is a test item', 'thumbnail.png', 'Dispatches in 2-4 days', 0, false, new Date("2018-03-31 02:00:07.525+01"), new Date("2018-03-31 02:00:07.525+01"));
            return assert.equal(0, result.payload, result.msg);
        });

        it('Should get all products', async () => {
            let result = await products.getAllProducts();
            return assert.isAbove(result.productList.length, 0, result.msg);
        });

        it('Should get default product using ID', async () => {
            let result = await products.getProductById(createdItemId);
            return assert.equal(0, result.payload, result.msg);
        });

        it('Should get products based on pagination', async () => {
            let result = await products.getProductsByPagination(1);
            assert.equal(0, result.payload, result.msg);
        });

        it('Should validate that the product has had its title updated', async () => {
            let result = await products.getProductById(createdItemId);
            assert.equal('Test Product Updated', result.product.productName, result.msg)
        });

        it('Should delete the previously made product', async () => {
            let result = await products.deleteProduct(createdItemId);
            return assert.isTrue(result, "Record could not be deleted..");
        });

    });
});