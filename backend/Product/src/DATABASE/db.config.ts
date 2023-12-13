
export const config = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "67890000",
    DATABASE: "node_product_db",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }

};

export const dialect = "postgres"