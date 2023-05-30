// Importando el enrutador de express
import { Router } from 'express';
// Creando una instancia del enrutador de express
const router = Router();
// Importando productos
import { products } from './admin.routes.js';
//importandi enrutador
import path from 'path';
// GET ///middleware de respuesta(middleware final)
router.get('/', (req, res)=>{
  // Mostrando productos en memoria
  console.log(products);
  console.log("📢 Sirviendo la ruta '/'");
  res.render('shop', {shop: 'active', docTitle:"Shop"});
});
// GET /about///middleware de proposito especifico//about
router.get('/about', (req, res) => {
  console.log("📢 Sirviendo la ruta '/about'");
  // Se contesta al server
  res.send(`
  <h1 style="color: teal" >About</h1>
  <p> Esta pagina es creada para aprender 
  desarollo fullstack en javascript</p>
  `);
});
export default router;