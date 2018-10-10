const mongoose = require('mongoose')

const ComplimentsToReviewSchema = new mongoose.Schema({
  text: mongoose.SchemaTypes.String,
})

module.exports = mongoose.model(
  'ComplimentsToReview',
  ComplimentsToReviewSchema
)
