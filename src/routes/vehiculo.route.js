import express from 'express';
import { getAll, vehiculo1, vehiculo2, vehiculo3 } from '../controllers/vehiculo.controller.js';

const router = express.Router();

router.get('', getAll);
router.get('/vehiculo1', vehiculo1);
router.get('/vehiculo2', vehiculo2);
router.get('/vehiculo3', vehiculo3);

export default router;