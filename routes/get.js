const mongoose = require("mongoose");
var express = require('express');
const router = express.Router();

const Spot = mongoose.model("Spot");
const Session = mongoose.model("Session");
const User = mongoose.model("User");

router.post('/spot', function(req, res) {
  
  const { dataId } = req.body;

  Spot.findById(dataId, (err, data) => {
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

router.post('/geocode', function(req, res) {
  const { address } = req.body;

  const apiKey = process.env.GCP_APIKEY;
  const address_ = address.replace(" ", "+");

  axios
    .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address_}&key=${apiKey}`)
    .then((res, err) => {
      // console.log(res.data.results[0].geometry);

      const { lat, lng } = res.data.results[0].geometry.location;
      // console.log(`${lat}, ${lng}`);

      res.json({
        lat: lat,
        lon: lng
      })
    });

});


module.exports = router;