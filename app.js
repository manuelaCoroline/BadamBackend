import express from "express";
import routes from "./src/routes/index.js"

const app = express();

app.use(express.json());  //Le serveur pourra lire automatiquement le JSON (req.body)

app.use("/",routes); //Toutes les routes passent par index.js

export default app;