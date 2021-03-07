var express = require('express');
const { render } = require('jade');
const md5 = require('md5');
const axios = require('axios');
var router = express.Router();

const mongoose = require("mongoose");
const User = mongoose.model("User");

function getCord(address) {

  const apiKey = process.env.GCP_APIKEY;
  const address_ = address.replace(" ", "+");

  axios
    .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address_}&key=${apiKey}`)
    .then((res, err) => {
      // console.log(res.data.results[0].geometry);

      const { lat, lng } = res.data.results[0].geometry.location;
      // console.log(`${lat}, ${lng}`);
    });

}

/* GET home page. */
router.get('/', function(req, res, next) {
  //  res.send("google cloud deploy");
  res.redirect('https://github.com/parkanywhereonline');
});

router.post('/login', function(req, res, next) {
  const { email, password } = req.body;

  User.findOne({ email: email }, (err, data) => {
    if (!data) { res.sendStatus(400); }
    else {
      if (md5(password) === data.password) {
        res.json(data);
      } else {
        res.sendStatus(400);
      }
    }
  });
})

router.get('/test', function(req, res, next) {
  // testing stuff
  // getCord('1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA');

  res.sendStatus(200);
});

module.exports = router;
