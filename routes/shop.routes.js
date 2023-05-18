// Importando el enrutador de express
import { Router } from 'express';
// Creando una instancia del enrutador de express
const router = Router();
//importandi enrutador
import path from 'path';

// GET ///middleware de respuesta(middleware final)
router.get('/', (req, res)=>{
  console.log("📢 Sirviendo la ruta '/'");
  // Se contesta al server
  res.sendFile(path.resolve('views','shop.html'));
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