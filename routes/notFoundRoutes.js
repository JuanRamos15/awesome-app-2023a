// Importando el enrutador de express
import { Router } from 'express';
import httpStatus from 'http-status';
// Creando una instancia del enrutador de express
const router = Router();
import path from 'path';
// GET /add-product
router.use('', (req, res) => {
 // Servimos el formulario
 console.log("📢 Sirviendo formulario...");
 res.sendFile(path.resolve('views','not-found.html'));
  });
export default router;


 