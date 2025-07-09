import express from "express";
import { responseMessage } from "../controllers/greetControles.js";

//זה בעצם אומר לו - מעכשיו אתה מתמקד בנתיב הזה בלבד
// זה מחזיר לו מופע של route חדש
const router = express.Router();

router.get('/' , responseMessage);

export default router;