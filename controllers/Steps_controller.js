var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/', function(req, res) {

  // SOLUTION:
  // =========
  // use the Cat model to find all cats,
  // and use the include option to grab info from the User model.
  // This will let us show the cat and it's owner.
  models.Steps.findAll({
    // where: checkboxes == true ?????!!!!!!! ******
    include: [ models.Recipes ]
  })
  // connect the findAll to this .then
  .then(function(steps) {
    // grab the user info from our req.
    // How is it in our req?
    // This info gets saved to req via the users_controller.js file.
    res.render('layouts/main', {
        RecipeName: Recipes.RecipeName
        Steps01: Steps.Steps01
        Steps02: Steps.Steps02
        Steps03: Steps.Steps03
        Steps04: Steps.Steps04
        Steps05: Steps.Steps05
        Steps06: Steps.Steps06
        Steps07: Steps.Steps07
        Steps08: Steps.Steps08
        Steps09: Steps.Steps09
        Steps10: Steps.Steps10
        Temp: Steps.Temp
        Time: Steps.Time
        Yeild: Steps.Yeild
    })
  })
});

// router.post('/create', function (req, res) {
  
//   // SOLUTION:
//   // =========
//   // use the Cat model to create a cat based on what's
//   // passed in req.body (name, sleepy, user_id)
//   models.Cat.create({
//     name: req.body.name,
//     sleepy: req.body.sleepy,
//     user_id: req.session.user_id
//   })
//   // connect the .create to this .then
//   .then(function() {
//     res.redirect('/');
//   })
// });

// router.put('/update/:id', function(req,res) {
//   // SOLUTION:
//   // =========
//   // use the Cat model to update a cat's sleepy status
//   // based on the boolean passed in req.body sleepy
//   // and the id of the cat (as passed in the url)
//   models.Cat.update(
//   {
//     sleepy: req.body.sleepy
//   },
//   {
//     where: { id : req.params.id }
//   })
//   // connect it to this .then.
//   .then(function (result) {
//     res.redirect('/');
//   })
// });


// router.delete('/delete/:id', function(req,res) {
//   // SOLUTION:
//   // =========
//   // use the Cat model to delete a cat
//   // based on the id passed in the url
//   models.Cat.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//   // connect it to this .then.
//   .then(function() {
//     res.redirect('/');
//   })
// });


module.exports = router;
