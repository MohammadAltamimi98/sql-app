'use strict';
const pool = require('./pool');

class Interface {



  // the query method takes two values the query itself and then the values
  // the second arg is an array always the represents the numbers in the query

  read(id) {
    if (id) {
      return pool.query('SELECT * FROM clothes WHERE id =$1;', [id])
    }
    return pool.query('SELECT * FROM clothes;')
  }

  create(obj) {
    const sql = 'INSERT INTO clothes (name, brand) VALUES($1,$2) RETURNING *;'
    const safeValues = [obj.name, obj.brand]
    return pool.query(sql, safeValues)
  }


  update(id, obj) {
    const sql = 'UPDATE clothes SET name=$1 , brand=$2 WHERE id=$3 RETURNING *;'
    const safeValues = [obj.name, obj.brand, id]
    return pool.query(sql, safeValues)
  }

  delete(id) {
    return pool.query('DELETE FROM clothes WHERE id=$1 RETURNING*;', [id])
  }
}

module.exports = Interface;