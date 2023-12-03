import {Sequelize, DataType, Model} from "sequelize-typescript";
import {config, dialect} from "./db.config";


const sequelize = new Sequelize(config);

class Cart extends Model{};

Cart.init({
    userId: {
        type: DataType.INTEGER,
        allowNull: false
    },

    products: {
        type: DataType.ARRAY,

    },
}, {
    sequelize,
    modelName: "Cart"
})

await Cart.sync();

