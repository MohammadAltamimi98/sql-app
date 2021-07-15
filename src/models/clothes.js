'use strict';

const mongoose = require('mongoose');


const clothesSchema = mongoose.Schema({
  name: { type: String, required: true },
  cuisine: { type: String },
});

const clothes = mongoose.model('clothes', clothesSchema);

module.exports = clothes;