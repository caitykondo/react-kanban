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
      assignedTo : req.body.assignedTo,
      createdBy : req.body.createdBy
    }).then(() => {
      res.end();
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
    .then((card) => {
      card.destroy({ force : true });
    })
  })
  .put((req, res) => {
    Card.findOne({
      where : {
        id : req.params.id
      }
    })
    .then((card) => {
      card.update({
        status: req.body.status
      });
        // set new properties

    })
  })


module.exports = router;