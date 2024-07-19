import express from "express";
import LogOut from "../Controllers/LogOut.mjs";

const logoutRouter=express.Router();

logoutRouter.get('/logout',LogOut);

export default logoutRouter;