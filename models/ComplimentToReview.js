const mongoose = require('mongoose')

const ComplimentToReviewSchema = new mongoose.Schema({
  text: mongoose.SchemaTypes.String,
})

module.exports = mongoose.model('ComplimentToReview', ComplimentToReviewSchema)
