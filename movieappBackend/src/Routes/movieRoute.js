const express = require("express");
const router = express.Router();
const { create, readAll, remove, update } = require("../CRUD/movies");

//ADD MOVIES
router.post("/addMovie", create);

//READ ALL MOVIES

router.get("/readAllMovies",readAll);

//DELETE MOVIES

router.delete("/removeMovie/:id", remove);

//UPDATE MOVIES
router.put("/updateMovie/:id", update);


module.exports = router;
