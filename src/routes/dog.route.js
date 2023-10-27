import express from 'express';
import DogController from '../controllers/dog.controller';
import { mockMiddleware } from '../middlewares/mock.middleware';

const router = express.Router();

router.get('', DogController.getMock);
router.get('/axios', mockMiddleware, DogController.usingAxios);

export default router;