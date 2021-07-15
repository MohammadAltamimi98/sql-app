const pool = require('pg');
require('dotenv').config();

// -- in production for heroku
// pg.defaults.ssl = process.env.NODE_ENV === 'production' && { rejectUnauthorized: false };

module.exports = new pg.pool({
  connectionString: process.env.DATABASE
});