'use strict';

const mongoose = require('mongoose');


const foodSchema = mongoose.Schema({
  name: { type: String, required: true },
  cuisine: { type: String },
});

const foods = mongoose.model('foods', foodSchema);

module.exports = foods;