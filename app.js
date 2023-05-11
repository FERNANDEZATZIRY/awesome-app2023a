//Importar el modulo HTTP
import http from 'http';
// Importando expressjs
import express from 'express';
//Crear una instancia de express
const app = express(); //(req,res) => { UN MONTO DE CODIGO}
//Registrando nuestro primer Middleware

app.use((req, res, next) => {  //Middleware es una funcion
    console.log("📢 Ejecutando el Middleware 1");
    //Invocando al siguiente Middleware
    next();
});

app.use((req, res, next) => {
    console.log("⭐ Ejecutando el Middleware 2");
    //Invocando al siguiente Middleware
    next();
});

app.use((req, res, next) => {
    console.log(`👻 ${req.method} - ${req.url}`);
    next();
});

app.use((req, res) => {
    console.log("⭐ Respondiendo al cliente");
    res.send(`
    <h1> Welcome to express </h1>
    <p> This is my awesome app </p>
    `)
});

//Creando el servidor
const server = http.createServer(app);
//Definir puertos
const port = 3000;
const ip = "0.0.0.0";
//Arrancar el server
server.listen(port, ip, (err) => {
    console.log("📢 Sirviendo en http://localhost:3000");
    console.log(`📢 Sirviendo en http://${process.env.IP}:${process.env.PORT}`);
});