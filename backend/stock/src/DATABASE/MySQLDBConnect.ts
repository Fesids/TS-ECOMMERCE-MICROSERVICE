import mysql2, {Pool} from "mysql2";

const dbConfig = {
    host: "localhost",
    port: 3307,
    database: "js_stock",
    user: "root", 
    password: "67890000"
}

const DB = mysql2.createConnection(
    dbConfig
)

const DBPool = mysql2.createPool(
    dbConfig
).promise();

export const MySQLDB = DB;
export const MySQLPool = DBPool