const mongoose = require("mongoose");
var express = require('express');
const router = express.Router();

const User = mongoose.model("User");
const Slot = mongoose.model("Slot");
const Session = mongoose.model("Session");

router.post('/slot', function(req, res) {
  const { name, address, owner } = req.body;

  const newSlot = new Slot({
    name: name,
    address: address,
    lat: 0.0,
    lon: 0.0,
    session: [],
    owner: new mongoose.Types.ObjectId(owner),
  });

  newSlot.save().then(slot => {
    res.json(slot);
  }).catch(err => console.log(err));
});

router.post('/user', function(req, res) {
  const { email, fname, lname } = req.body;

  const newUser = new User({
    email: email,
    fname: fname,
    lname: lname,
    slots: [],
    sessions: [],
  });

  newUser.save().then(user => {
    res.json(user);
  }).catch(err => console.log(err));
});

router.post('/session', function(req, res) {
  const { start, end, user } = req.body;

  const newSession = new Session({
    start: start,
    end: end,
    booked_by: new mongoose.Types.ObjectId(user),
  });

  newSession.save().then(session => {
    res.json(session);
  }).catch(err => console.log(err));
});

module.exports = router;
