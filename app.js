//importar express(se le puede cambiar el nombre)
import express from 'express';
//importando http-status
import httpStatus from 'http-status';
// Template Engine
import { engine } from 'express-handlebars';
import path from 'path';
// Importando el enrutador
import adminRouter from './routes/admin.routes.js';
import shopRouter from './routes/shop.routes.js';
import error404 from './routes/notFoundRoutes.js';
//importando root dir
import { ROOT_DIR } from './helpers/paths.js';
// Creando la instancia de express
// que basicamente es un middleware
const app = express();//(req,res)=>{codigo}
const hbsTemplateEngine = engine({
    // Extensión de los archivos de plantillas
    extname: '.hbs',
    // Nombre del diseño por defecto
    defaultLayout: 'main',
  });
  // TE1. Se registra en la instancia de express
app.engine('hbs', hbsTemplateEngine);

// TE2.Se selecciona el Template Engine
app.set('view engine', 'hbs');

// TE3. Se establece la ruta de las vistas
app.set('views', path.resolve('views'));

// Se registra el middleware del body-parser///Middleware de parseo de datos del cliente
app.use(express.urlencoded({ extended: true }));
//se regsitra el middleware para el servidor de archivos estaticos
app.use(express.static(path.join(ROOT_DIR,'public')));

// Se agrega ruta de administrador
app.use('/admin',adminRouter);
// Se agrega ruta shop
app.use(shopRouter);
//registrando middleware para el error 404
app.use(error404);
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
