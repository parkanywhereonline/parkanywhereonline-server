const mongoose = require("mongoose");
var express = require('express');
const md5 = require("md5");
const router = express.Router();

const User = mongoose.model("User");
const Spot = mongoose.model("Spot");
const Session = mongoose.model("Session");

router.post('/spot', function(req, res) {
  const { name, address, owner, lat, lon } = req.body;

  const newSpot = new Spot({
    name: name,
    address: address,
    lat: lat,
    lon: lon,
    sessions: [],
    owner: new mongoose.Types.ObjectId(owner),
  });

  newSpot.save().then(spot => {
    User.findByIdAndUpdate(owner, {
      $push: { spots: spot._id }
    }, _ => {});

    res.json(spot);
  }).catch(err => console.log(err));
});

router.post('/user', function(req, res) {
  const { email, fname, lname, password } = req.body;

  const newUser = new User({
    email: email,
    fname: fname,
    lname: lname,
    password: md5(password),
    spots: [],
    sessions: [],
  });

  newUser.save().then(user => {
    res.json(user);
  }).catch(err => console.log(err));
});

router.post('/session', function(req, res) {
  const { start, end, user, spot } = req.body;

  const newSession = new Session({
    start: start,
    end: end,
    booked_by: new mongoose.Types.ObjectId(user),
    spot: new mongoose.Types.ObjectId(spot),
  });

  newSession.save().then(session => {
    User.findByIdAndUpdate(user, {
      $push: { sessions: session._id }
    }, _ => {});

    Spot.findByIdAndUpdate(spot, {
      $push: { sessions: session._id }
    }, _ => {});

    res.json(session);
  }).catch(err => console.log(err));
});

module.exports = router;
