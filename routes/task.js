const express = require('express');
let router = express.Router();
const db = require('./../models');
const { Card } = db;

// / GET ALL CARDS
// / POST NEW CARD

// /{id} GET CARD BY ID
// /{id} DELETE CARD
// /{id} PUT EDIT CARD

router.route('/')
  .get((req, res) => {
    Card.findAll()
    .then((cards) => {
      res.send(cards);
    })
  })
  .post((req, res) => {
    // add check for all required fields
    Card.create({
      task : req.body.task,
      priority : req.body.priority,
      status : req.body.status,
      createdBy : req.body.createdBy,
      assignedTo : req.body.assignedTo
    })
  });

router.route('/:id')
  .get((req, res) => {
    Card.findAll({
      where : {
        id : req.params.id
      }
    })
    .then((card) => {
      res.send(card);
    })
  })
  .delete((req, res) => {
    Card.findOne({
      where : {
        id : req.params.id
      }
    })
    .then((photo) => {
      photo.destroy({ force : true });
    })
  })


module.exports = router;