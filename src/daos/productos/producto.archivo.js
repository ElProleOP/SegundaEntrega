const { ContenedorArchivo } = require("../../db/contenedor.archivo.js")


class ProductoArchivo extends ContenedorArchivo {
    constructor(){
        super('productos')
    }
}

module.exports = ProductoArchivo;