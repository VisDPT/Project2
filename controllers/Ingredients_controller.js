var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/', function(req, res) {

  // SOLUTION:
  // =========
  // use the Cat model to find all cats,
  // and use the include option to grab info from the User model.
  // This will let us show the cat and it's owner.
  models.Ingredients.findAll({
    // where: checkboxes == true ?????!!!!!!! ******
    include: [ models.Recipes ]
  })
  // connect the findAll to this .then
  .then(function(ingredients) {
    // grab the user info from our req.
    // How is it in our req?
    // This info gets saved to req via the users_controller.js file.
    res.render('layouts/main', {
      RecipeName: Recipes.RecipeName
      Qty01: Ingredients.Qty01
      Ingred01: Ingredients.Ingred01
      Qty02: Ingredients.Qty02
      Ingred02: Ingredients.Ingred02
      Qty03: Ingredients.Qty03
      Ingred03: Ingredients.Ingred03
      Qty04: Ingredients.Qty04
      Ingred04: Ingredients.Ingred04
      Qty05: Ingredients.Qty05
      Ingred05: Ingredients.Ingred05
      Qty06: Ingredients.Qty06
      Ingred06: Ingredients.Ingred06
      Qty07: Ingredients.Qty07
      Ingred07: Ingredients.Ingred07
      Qty08: Ingredients.Qty08
      Ingred08: Ingredients.Ingred08
      Qty09: Ingredients.Qty09
      Ingred09: Ingredients.Ingred09
      Qty10: Ingredients.Qty10
      Ingred10: Ingredients.Ingred10
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
