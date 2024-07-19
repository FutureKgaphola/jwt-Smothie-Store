import express from "express";
import { GetAuthCookie } from "../Controllers/Cookie_Controller.mjs";

const router=express.Router();

router.get('/authcookie',GetAuthCookie);

export default router;