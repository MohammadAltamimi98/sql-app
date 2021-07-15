'use strict';
const express = require('express');
const router = express.Router();
const clothesModel = require('../models/clothes');
const Interface = require('../models/Interface-clothes');
const clothes = new Interface(clothesModel);




router.get('/', getClothes);
router.get('/:id', getClothes);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);



async function getClothes(req, res, next) {
  try {
    const id = req.params.id;
    const clothesInfo = await clothes.read(id);
    res.json({ clothesInfo: clothesInfo.rows });
  } catch (e) {
    next(e);
  }
}




async function createClothes(req, res, next) {
  try {
    const data = req.body;
    const newClothes = await clothes.create(data);
    res.json(newClothes.rows[0]);
  } catch (e) {
    next(e);
  }
}


async function updateClothes(req, res, next) {
  try {
    const id = req.params.id;
    const data = req.body;
    const newClothes = await clothes.update(id, data);
    res.json(newClothes.rows[0]);
  } catch (e) {
    next(e);
  }
}


async function deleteClothes(req, res, next) {
  try {
    const id = req.params.id;
    const deletedClothes = await clothes.delete(id);
    res.json(deletedClothes.rows[0]);
  } catch (e) {
    next(e);
  }
}


module.exports = router;
