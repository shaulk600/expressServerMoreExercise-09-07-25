
import express from "express";
import  configRoutes  from "./routes/configRoutes.js";

const app = express();

app.use(express.json());

configRoutes(app);

const PORT = process.env.PORT || 3000 ;
app.listen(PORT, ()=> console.log('server running'));