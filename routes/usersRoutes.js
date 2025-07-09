import express from "express";
import {getAllUsers,addNewUser  } from "../controllers/usersControles.js";

const router = express.Router();

router.get('/' , getAllUsers);
router.get('/:id' , );
router.post('/' , addNewUser);
router.put('/:id' ,);
router.delete('/:id' ,);


export default router;
