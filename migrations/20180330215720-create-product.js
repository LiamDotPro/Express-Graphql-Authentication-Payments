'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            productName: {
                type: Sequelize.STRING
            },
            productDesc: {
                type: Sequelize.STRING
            },
            productThumbnail: {
                type: Sequelize.STRING
            },
            productDispatchTime: {
                type: Sequelize.STRING
            },
            productInventory: {
                type: Sequelize.INTEGER
            },
            status: {
                type: Sequelize.INTEGER
            },
            eligibleForDiscount: {
                type: Sequelize.BOOLEAN
            },
            startSale: {
                type: Sequelize.DATE
            },
            endSale: {
                type: Sequelize.DATE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('products');
    }
};