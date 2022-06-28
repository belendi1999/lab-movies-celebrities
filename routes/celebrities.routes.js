// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Movie = require('../models/Movie.model')
const Celebrity = require('../models/Celebrity.model')

router.get('/celebrities/create', (req, res, next) => res.render('celebrities/new-celebrity.hbs'))
router.post("/celebrities/create", (req, res, next) => {
const { name, occupation, catchPhrase} = req.body
    Celebrity
    .create({
      name, occupation, catchPhrase
    })
    .then((response)=>{
      res.redirect("/celebrities")
    })
    .catch((e)=> res.render("celebrities/new-celebrity.hbs"))
  });
router.get('/celebrities', (req, res) => {
    Celebrity
        .find()
        .then(celebrities => res.render('celebrities/celebrities.hbs', { celebrities }))
        .catch(e => res.send('error conexion'))
});
  

module.exports = router;