'use strict';

module.exports = function (sequelize, DataTypes) {
    var product = sequelize.define('product', {
        productName: DataTypes.STRING,
        productDesc: DataTypes.STRING,
        productThumbnail: DataTypes.STRING,
        productDispatchTime: DataTypes.STRING,
        productInventory: DataTypes.INTEGER,
        startSale: DataTypes.DATEONLY,
        endSale: DataTypes.DATEONLY,
        status: DataTypes.INTEGER,
        eligibleForDiscount: DataTypes.BOOLEAN
    }, {});
    product.associate = function (models) {
        // associations can be defined here
    };
    return product;
};
//# sourceMappingURL=product.js.map