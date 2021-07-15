'use strict'
const pg = require('pg');
require('dotenv').config();

// -- in production for heroku
// pg.defaults.ssl = process.env.NODE_ENV === 'production' && { rejectUnauthorized: false };

// use capital for Pool

module.exports = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});