import express, { json } from 'express'
const app = express()

app.use(express.json());
const users = []

app.get("/hello", (req, res) => {
  res.send('Hello World')
})

// METODO => GET, POST, PUT/PATCH, DELETE
// NOME => "Começa com /", sempre deve ser no plural. Exemplo: /users
// Callback functions => Onde executamos o backend (lógica, regra de négocio ...) 

app.post("/users", (req, res) => {
    const body = req.body
    users.push(body)
    res.status(201).send("Usuario criado com sucesso!");
});

app.get("/users", (req, res) => {
    res.send({users})
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});