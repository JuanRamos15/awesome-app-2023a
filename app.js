//importar express(se le puede cambiar el nombre)
import express from 'express';
// Importando el enrutador
import adminRouter from './routes/admin.routes.js';
import shopRouter from './routes/shop.routes.js';
// Creando la instancia de express
// que basicamente es un middleware
const app = express();//(req,res)=>{codigo}
// Se registra el middleware del body-parser///Middleware de parseo de datos del cliente
app.use(express.urlencoded({ extended: true }));
// Se agrega ruta de administrador
app.use(adminRouter);
// Se agrega ruta shop
app.use(shopRouter);
// Creando una instancia del enrutador de express
//Registrar nuestro primer middleware
app.use((req,res,next)=>{
 console.log("Middleware 1 funcionando🚈");
 //envocando al siguinte middleware
 next();
});
///se crea el middleware 2
app.use((req,resp,next)=>{
 console.log("El  middleware 2 funcionando🚌");
 console.log(`${req.method}-${req.url}`);
 next();
});

//crear el servidor
//const server = http.createServer(app);
//Definir puertos
const port = 3000;
const ip = "0.0.0.0";
///Arrancar el servidor(creacion)
app.listen(port, ip, () => {
 console.log("servidor trabajando 💼 en : http://localhost:3000");
 //console.log(`servidor trabajando 💼 en : http://${process.env.IP}:${process.env.PORT}:3000`);
});
