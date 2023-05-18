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
//se crea el middleware 2
app.use((req,resp,next)=>{
 console.log("El  middleware 2 funcionando🚌");
 console.log(`${req.method}-${req.url}`);
 next();
});
///middleware de proposito especifico//about
app.use(`/about`,(req,res)=>{
    res.send(`
    <h1 style="color: teal" >About</h1>
    <p> Esta pagina es creada para aprender 
    desarollo fullstack en javascript</p>
    `)
});
//GET /add-product(middleware)
app.get(`/add-product`,(req,res,next)=>{
    console.log("Sirve el formulario 👍");
 //siviendo al formulario
 res.send(`
  <form action="/add-product" method="POST">
  <label for="title">Title</label>
  <input id="title" type="text"name="title">
  <label for="description">Description<label>
  <input id="description" type="text" name="description">
  <button type="submit">Add product</button>
  </form>
 `);
});
//POST /add-product
app.post(`/add-product`,(req,res)=>{
 //Realizando una extraccion de los datos de la peticion
 for(const prop in req.body)
 {
    console.log(`${prop}:${req.body[prop]}`);
 }
 //Rediccionamiento
  res.redirect(`/`);
}); 
//middleware de respuesta(middleware final)
app.use((req,res)=>{
    console.log("El repuesta de middleware al cliente");
    res.send(`
    <h1> Bienvenido a express</h1>
    <p>Esta es mi app asombrosa</p>
    
    `);
   });
//crear el servidor
//const server = http.createServer(app);
//Definir puertos
const port = 3000;
const ip = "0.0.0.0";
// Arrancar el servidor(creacion)
app.listen(port, ip, () => {
 console.log("servidor trabajando 💼 en : http://localhost:3000");
 //console.log(`servidor trabajando 💼 en : http://${process.env.IP}:${process.env.PORT}:3000`);
});
