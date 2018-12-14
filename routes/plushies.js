const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const router = express.Router();

const { Plushie, validate } = require("../models/plushie");

//GET Prefix
router.get("/prefix/:number", async (req, res) => {
  let arrayOfRandomNames = [];

  const totalNames = await Plushie.find({ prefix: true }).select({ name: 1 });

  for (let i = 0; i < req.params.number; i++) {
    let max = totalNames.length;
    let random = Math.floor(Math.random() * max);
    arrayOfRandomNames.push(totalNames[random].name);
  }

  res.send(arrayOfRandomNames);
});

//POST NAMES
router.post("/", async (req, res) => {
  let names = [];
  for (prop in req.body) {
    if (req.body[prop]) {
      let totalNames = await Plushie.find({})
        .where(`${prop}`, true)
        .select({ name: 1 });

      for (let i = 0; i < 5; i++) {
        let max = totalNames.length;
        let random = Math.floor(Math.random() * max);
        if (names[i]) {
          names[i] = `${names[i]} ${totalNames[random].name}`;
        } else {
          names[i] = `${totalNames[random].name}`;
        }
      }
    }
  }
  res.send(names);
});

module.exports = router;
