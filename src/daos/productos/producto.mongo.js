const { ContenedorMongo } = require('../../db/contenedor.mongo.js')


class ProductoMongo extends ContenedorMongo {
    constructor(){
        super('productos')
    }
}

module.exports = ProductoMongo;