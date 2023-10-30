import express from 'express';
import { getAll, cliente1, cliente2, cliente3 } from '../controllers/cliente.controller.js';

const router = express.Router();

router.get('', getAll);
router.get('/cliente1', cliente1);
router.get('/cliente2', cliente2);
router.get('/cliente3', cliente3);

export default router;