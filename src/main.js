const express = require("express");
const { PORT } = require("./config/const")

const app = express()

app.use(express.json())
app.use('/api/productos', require("./routes/productos.router"))
app.use('/api/carrito', require("./routes/carrito.router"))

app.get("/", (req,res) =>{
    res.send("Todo en orden!")
})

app.listen(PORT, () => console.log(`Server on Port ${PORT}`));