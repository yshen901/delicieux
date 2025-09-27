const express = require("express");
const router = express.Router();
const Cart = require('../../models/cart');

// gets using the user_id?
router.get('/:userId', (req, res) => {
  Cart.findOne({ userId: req.params.userId })
    .then(cart => {
      let reformatted = {
        id: cart._id,
        dates: cart.dates,
        userId: cart.userId,
      }
      res.json(reformatted)
    })
    .catch(err => res.status(404).json(err));
});

// For addCartDate
router.patch('/:cartId/addDate/', (req, res) => {
  let options = { new: true }
  let update = { $set: {} };
  update["$set"][`dates.${req.body.date}`] = {
    "BREAKFAST": undefined,
    "LUNCH": undefined,
    "DINNER": undefined,
    "STATUS": {},
  };

  Cart.findOneAndUpdate(
    { _id: req.params.cartId }, 
    update,
    options, 
    (err, result) => err ? res.status(400).json(err) : res.json(result)
  )
});

router.patch("/:cartId/addMeal/", (req, res) => {
  let options = { new: true };
  let update = { $set: {} };
  update["$set"][`dates.${req.body.date}.${req.body.time}`] = req.body.recipeId;

  // MONGOOSE_UPDATE: No longer accepts a callback
  // Cart.findOneAndUpdate(
  //   { _id: req.params.cartId },
  //   update,
  //   options,
  //   (err, result) => (err ? res.status(400).json(err) : res.json(result))
  // )
  Cart.findOneAndUpdate(
    { _id: req.params.cartId },
    update,
    options
  )
  .then(result => res.json(result))
  .catch(err => res.status(400).json(err))
  
});

module.exports = router;