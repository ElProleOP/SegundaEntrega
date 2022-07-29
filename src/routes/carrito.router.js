const { Router } = require("express")
const { carritoApi, productosApi } = require("../daos/main.js")

const router = Router()

router.get('/', async (req, res) => {
    try {
        const carritos = await carritoApi.mostrarTodos()
        
        res.json(carritos)
    } catch (error) {
        res.json(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const { nombre } = req.body
        const carrito = await carritoApi.guardarElemento({nombre, productos: []})

        res.json(carrito)
    } catch (error) {
        res.json(error)
    }
})

router.post('/:id/productos', async (req, res) => {
    try {
        const {id} = req.params
        const {productoId} = req.body
        const carrito = await carritoApi.mostrarPorId(id)
        const producto = await productosApi.mostrarPorId(productoId)
        carrito.productos =  [...carrito.productos, producto]
        
        const respuesta = await carritoApi.actualizar(id, carrito)

        res.json(respuesta)

    } catch (error) {
        res.json(error)
    }
})

router.get('/:id/productos', async (req,res) => {
    try {
        const {id} = req.params
        const respuesta = await carritoApi.mostrarPorId(id)   
        if(!respuesta.productos) return res.json({message: 'Carrito no encontrado'})
        res.json(respuesta.productos)
    } catch (error) {
        res.json(error)
    }
})


module.exports =  router;