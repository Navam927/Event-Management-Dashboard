import express from 'express';
import { deleteUser, loginUser, registerUser } from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.delete('/delete',authMiddleware , deleteUser)

export default userRouter;