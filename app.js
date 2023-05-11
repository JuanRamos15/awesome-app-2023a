//importar el modulo http 
import http from 'http';
//importar express(se le puede cambiar el nombre)
import express from 'express';
import { Console } from 'console';
//crear instancia de express
const app = express();//(req,res)=>{codigo}
//Registrar nuestro primer middleware
app.use((req,res,next)=>{
 console.log("Middleware 1 funcionando🚈");
});
//crear el servidor
const server = http.createServer(app);
//Definir puertos
const port = 3000;
const ip = "0.0.0.0";
// Arrancar el servidor
server.listen(port, ip, (err) => {
 console.log("servidor trabajando 💼 en : http://localhost:3000");
 console.log(`servidor trabajando 💼 en : http://${process.env.IP}:${process.env.PORT}:3000`);
});