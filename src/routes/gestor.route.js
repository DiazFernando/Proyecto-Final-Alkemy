import express from 'express';
import { getAll, gestor1, gestor2, gestor3 } from '../controllers/gestor.controller.js';

const router = express.Router();

router.get('', getAll);
router.get('/gestor1', gestor1);
router.get('/gestor2', gestor2);
router.get('/gestor3', gestor3);

export default router;