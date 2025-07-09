import express from "express";
import { getAllUsers, getUserByID, addNewUser, updateUserByID, deleteUserByID } from "../controllers/usersControles.js";

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserByID);
router.post('/', addNewUser);
router.put('/:id', updateUserByID);
router.delete('/:id', deleteUserByID);


export default router;
