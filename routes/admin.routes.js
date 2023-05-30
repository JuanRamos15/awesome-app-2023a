// Importando el enrutador de express
import { Router } from 'express';
// Creando una instancia del enrutador de express
const router = Router();
// Creando datos en la memorian volatil
export const products = [];
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
  res.render('add-product');
});
// POST /add-product
router.post('/add-product', (req, res) => {
   // Realizaremos la desestructuracion de
  // "name" de la petición
  const { title } = req.body;
  // Agregamos el dato en la base de datos
  products.push(title);
  // Redireccionando
  res.redirect('/');
});
export default router;
