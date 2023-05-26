// Importando el enrutador de express
import { Router } from 'express';
// Creando una instancia del enrutador de express
const router = Router();
import path from 'path';
//importando ROOT_DIR
import { ROOT_DIR } from '../helpers/paths.js';
// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
  // Si la petición es post pasamos el siguiente
  // Middleware
  if(req.method === "POST") return next();
  // Servimos el formulario
  console.log("📢 Sirviendo formulario...");
  console.log(`ROOT_DIR:${ROOT_DIR}`);
  res.sendFile(path.join(ROOT_DIR,'views','add-product.html'));
});
// POST /add-product
router.post('/add-product', (req, res) => {
  // Realizaremos la extracción de
  // parametros dentro de la peticion
  console.log(req.body);
  res.redirect('/');
});
export default router;
