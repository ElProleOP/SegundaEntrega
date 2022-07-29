const { ContenedorMongo } = require('../../db/contenedor.mongo')


class CarritoMongo extends ContenedorMongo {
    constructor(){
        super('carrito')
    }
}

module.exports = CarritoMongo;