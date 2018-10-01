var express = require('express')
var router = express.Router()
const Compliment = require('../models/Compliment')

router.get('/', function(req, res, next) {
  Compliment.find()
    .then(compliments => res.json(compliments))
    .catch(error => res.json(error))
})

router.post('/', function(req, res, next) {
  Compliment.create(req.body)
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

module.exports = router
