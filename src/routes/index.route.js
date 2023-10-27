import express from 'express';
const router = express.Router();

import { mockMiddleware } from '../middlewares/mock.middleware';
import dogRouter from './dog.route';

router.use('/dog', dogRouter);
// router.use('/cat', mockMiddleware, catRoute);
// router.use('/prestamo', mockMiddleware, prestamoRoute);

export default router;