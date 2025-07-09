import express from "express";

//זה בעצם אומר לו - מעכשיו אתה מתמקד בנתיב הזה בלבד
// זה מחזיר לו מופע של route חדש
const router = express.Router();

router.get('/' , (req,res)=>{
    res.json({msg: 'hello from /greet'})
})

export default router;