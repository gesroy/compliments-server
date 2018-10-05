var express = require('express')
var router = express.Router()
const ComplimentToReview = require('../models/ComplimentToReview')

router.get('/', function(req, res, next) {
  ComplimentToReview.find()
    .then(complimentsToReview => res.json(complimentsToReview))
    .catch(error => res.json(error))
})

router.post('/', function(req, res, next) {
  ComplimentToReview.create(req.body)
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

module.exports = router
