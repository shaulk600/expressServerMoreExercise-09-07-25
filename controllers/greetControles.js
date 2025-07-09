import express from "express";

export function responseMessage(req,res){
    res.json({msg: 'hello from /greet'});
}

