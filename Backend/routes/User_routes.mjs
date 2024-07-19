import express from 'express';
import { createOneUser,getProfile,loginUser } from '../Controllers/User_Controller.mjs';
const router = express.Router();

router.post('/signup',createOneUser);
router.post('/login',loginUser);

router.get('/profile',getProfile); 
export default router;