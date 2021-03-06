const mongoose = require("mongoose");
var express = require('express');
const router = express.Router();

const Slot = mongoose.model("Slot");
const Session = mongoose.model("Session");
const User = mongoose.model("User");

router.post('/slot', function(req, res) {
  
  const { dataId } = req.body;

  Slot.findById(dataId, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });

});

router.post('/session', function(req, res) {
  
  const { dataId } = req.body;

  Session.findById(dataId, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });

});

router.post('/user', function(req, res) {
  
  const { dataId } = req.body;

  User.findById(dataId, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });

});


module.exports = router;