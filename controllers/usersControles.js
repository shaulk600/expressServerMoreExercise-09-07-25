import express from "express";
import { User } from "../data/classUsers.js";

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, '../data/db_user.txt');

export async function getAllUsers(req, res) {
    try {
        const data = await fs.readFile(file, 'utf-8');
        const users = data ? JSON.parse(data) : [];
        res.status(200).json(users);
    } catch (err) {
        res.status(500).send('Error reading users');
        console.log('worning !! - server error: ', err);
    }
}

export async function setNewUser(req, res) {
    const userId = req.body.id;
    const username = req.body.name;
    if (!username) return res.status(400).send('Name is required');
    if (!userId) return res.status(400).send('Id is required');
    const newData = new User(userId, username);
    try {
        const data = await fs.readFile(file, 'utf-8');
        const users = data ? JSON.parse(data) : [];
        users.push(newData);
        await fs.writeFile(file, JSON.stringify(users));
        res.status(201).json({ message: 'User added', users });
    } catch (err) {
        res.status(500).send('Error saving user');
        console.log('worning !! - server error: ', err);
    }
}

export async function getUserByID(req, res) {
    const idParam = parseInt(req.params.id || 0);
    try {
        const data = await fs.readFile(file, 'utf-8');
        const users = data ? JSON.parse(data) : [];
        for (let i = 0; i < users.length; i++) {
            const idA = users[i].getId();
            if (users[i].idA == idParam) {
                res.status(200).json({ idA: (users[i].getName()) });
            }
        }
        res.status(404).json({ msg: 'id - User not found' });
    } catch (err) {
        res.status(500).send('Error reading users');
        console.log('worning !! - server error: ', err);
    }

}

export async function updateUserByID(req, res) { //updateName about index
    const userId = req.body.id;
    const username = req.body.name;
    if (!username) return res.status(400).send('Name is required');
    if (!userId) return res.status(400).send('Id is required');

    try {
        const data = await fs.readFile(file, 'utf-8');
        const users = JSON.parse(data);
        if (index < 0 || index >= users.length) {
            return res.status(404).send('User not found');
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].getId() === idParam) {
                users.splice(i, 1, json.stringify({ userId: username }));
                await fs.writeFile(file, JSON.stringify(users));
                res.status(200).json({ message: 'User updated', users });
            }
        }
        res.status(400).json({ msg: 'Invalid request - id not found' });
    } catch {
        res.status(500).send('Error updating user');
        console.log('worning !! - server error: ', err);
    }
}
// export async function updateUserByIndex(req, res) { //updateName about index
//     const index = parseInt(req.params.index || 0);
//     const { name } = req.body;
//     if (!name) return res.status(400).send('Name is required');

//     try {
//         const data = await fs.readFile(file, 'utf-8');
//         const users = JSON.parse(data);
//         if (index < 0 || index >= users.length) {
//             return res.status(404).send('User not found');
//         }
//         users[index] = name;
//         await fs.writeFile(file, JSON.stringify(users));
//         res.status(200).json({ message: 'User updated', users });
//     } catch {
//         res.status(500).send('Error updating user');
//         console.log('worning !! - server error: ', err);
//     }
// }
export async function deleteUserByID(req, res) {
    const idParam = parseInt(req.params.id);
    try {
        const data = await fs.readFile(file, 'utf-8');
        const users = JSON.parse(data);
        for (let i = 0; i < users.length; i++) {
            if (users[i].getId() === idParam) {
                users.splice(i, 1);
                await fs.writeFile(file, JSON.stringify(users));
                res.status(200).json({ message: 'User deleted', users });
            }
        }
        res.status(404).json({ msg: 'Invalid request - id not found'});
    } catch {
        res.status(500).send('Error deleting user');
        console.log('worning !! - server error: ', err);
    }
}