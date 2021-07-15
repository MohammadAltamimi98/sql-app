'use strict';
require('dotenv').config();
const server = require('./src/server');
const pool = require('./src/models/pool');
const PORT = process.env.PORT || 5000;





Pool.connect.then(() => {
  server.start(PORT)
})
.catch((e) => {
  console.log('Error message', e.message);
})
