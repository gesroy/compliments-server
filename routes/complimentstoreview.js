var express = require('express')
var router = express.Router()
const ComplimentsToReview = require('../models/ComplimentsToReview')

router.get('/', function(req, res, next) {
  ComplimentsToReview.find()
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

router.post('/', function(req, res, next) {
  ComplimentsToReview.create(req.body)
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

module.exports = router
