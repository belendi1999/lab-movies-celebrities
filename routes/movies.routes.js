// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require('../models/Celebrity.model')


const Movie = require("../models/Movie.model");
router.get("/movies/create", (req, res, next) =>{
    Celebrity
    .find()
    .then(celebrities => res.render("movies/new-movie.hbs",{celebrities} )).catch((e)=>console.log(e))})

 
router.post("/movies/create", (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
  Movie.create({
    title,
    genre,
    plot,
    cast,
  })
    .then((response) => {
      res.redirect("/movies");
    })
    .catch((e) => res.render("movies/new-movies.hbs"));
});
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then(response=>res.render("movies/movies",{response}))
    .catch(e=>res.send("error"))
    
})

module.exports = router;
