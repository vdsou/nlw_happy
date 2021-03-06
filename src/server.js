const PORT = process.env.PORT || 3000;
const express = require("express");
const pages  = require("./pages.js");
const path = require("path");
const server = express();

server.use(express.static("public"))
.use(express.urlencoded( {extended: true} ))
// index

// setting template views
.set("views", path.join(__dirname, "views"))
.set("view engine", "hbs")

// /pages

.get("/", pages.index)
.get("/orphanages", pages.orphanages)
.get("/orphanage", pages.orphanage)
.get("/create-orphanage", pages.createOrphanage)
.post("/save-orphanage", pages.saveOrphanage);
server.use((req, res) => {
    return res.status(404).send("Erro! Página não encontrada.");
})

server.listen(PORT, e => {console.log("conectado em", PORT)})