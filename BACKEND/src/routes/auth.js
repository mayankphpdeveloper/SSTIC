import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import {login,register,protectedRoute} from '../controllers/authController.js';
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/protected', protectedRoute);

export default router;
