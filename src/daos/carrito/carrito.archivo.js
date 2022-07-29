const { ContenedorArchivo } = require("../../db/contenedor.archivo")


class CarritoArchivo extends ContenedorArchivo {
    constructor(){
        super('carrito')
    }
}

module.exports = CarritoArchivo;