// Importando el enrutador de express
import { Router } from 'express';
import httpStatus from 'http-status';
// Creando una instancia del enrutador de express
const router = Router();
import path from 'path';
router.use('', (req, res) => {
 // Servimos el formulario
 res.render('not-found');
  });
export default router;


 