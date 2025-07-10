// import express from "express";
import greetRoutes from "./greetRoutes.js";
import usersRoutes from "./usersRoutes.js";
import postsRoutes from "./postsRoutes.js";

export default function configRoutes(app) {
    app.use('/greet', greetRoutes);
    app.use('/users', usersRoutes);
    app.use('/posts', postsRoutes);

    app.use((req, res) => { // כל ניתוב שאינו קיים - יכנס לפה 
        res.status(404).json({ msg: 'Route not found' })
    });
    //חומר למחשבה  : אולי נרצה לשים פה איזשהו "logger" שיתןצ לי אינדיקצייה במידה ו"מנסים" את השרת הזה
}