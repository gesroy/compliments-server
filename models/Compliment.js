const mongoose = require('mongoose')

const ComplimentSchema = new mongoose.Schema({
  text: mongoose.SchemaTypes.String,
  friend: mongoose.SchemaTypes.Boolean,
})

module.exports = mongoose.model('Compliment', ComplimentSchema)
