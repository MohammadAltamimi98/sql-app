'use strict';
const pool = require('./pool');

class Interface {



  // the query method takes two values the query itself and then the values
  // the second arg is an array always the represents the numbers in the query
  read(id) {
    if (id) {
      return pool.query('SELECT * FROM foods WHERE id =$1;', [id])
    }
    return this.model.find({})
  }

  create(obj) {
    const sql = 'INSERT INTO foods (name, cuisine) VALUES($1,$2) RETURNING *;'
    const safeValues = [obj.name, obj.cuisine]
    return pool.query(sql, safeValues)
  }


  update(id, obj) {
    const sql = 'UPDATE foods SET name=$1 , cuisine=$2 WHERE id=$3 RETURNING *;'
    const safeValues = [obj.name, obj.cuisine, id]
    return pool.query(sql, safeValues)
  }

  delete(_id) {
    return pool.query('DELETE FROM foods WHERE id=$1 RETURNING*;', [id])
  }
}

module.exports = Interface;