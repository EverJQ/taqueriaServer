const express = require("express");
const app = express();

app.use(express.json());

let pedidos = [];

// 📥 Guardar pedido
app.post("/pedido", (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido);
    res.json({ mensaje: "Pedido recibido" });
});

// 📤 Obtener pedidos
app.get("/pedidos", (req, res) => {
    res.json(pedidos);
});

// 🔥 CAMBIO IMPORTANTE AQUÍ
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);
});

app.get("/", (req, res) => {
    res.send("Servidor funcionando 🔥");
});