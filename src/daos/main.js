const { CarritoArchivo } = require ("./carrito/carrito.archivo.js");
const { CarritoMongo } = require ("./carrito/carrito.mongo.js");
const { ProductoArchivo } = require ("./productos/producto.archivo.js");
const { ProductoMongo } = require ("./productos/producto.mongo.js");

const DATABASES = {
    mongo: {
        carritoApi: new CarritoMongo(),
        productosApi: new ProductoMongo()
    },
    archivo: {
        carritoApi: new CarritoArchivo(),
        productosApi: new ProductoArchivo()
    }
}

const DB = process.env.SELECTED_DB || 'mongo'

const {carritoApi, productosApi} = DATABASES[DB]

module.exports = carritoApi, productosApi;