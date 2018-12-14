const express = require("express");
const router = express.Router();

const { Plushie } = require("../models/plushie");

//POST NAMES
// router.post("/", async (req, res) => {
//   let names = [];
//   for (prop in req.body) {
//     if (req.body[prop]) {
//       let totalNames = await Plushie.find({})
//         .where(`${prop}`, true)
//         .select({ name: 1 });

//       for (let i = 0; i < 5; i++) {
//         let max = totalNames.length;
//         let random = Math.floor(Math.random() * max);
//         if (names[i]) {
//           names[i] = `${names[i]} ${totalNames[random].name}`;
//         } else {
//           names[i] = `${totalNames[random].name}`;
//         }
//       }
//     }
//   }
//   res.send(names);
// });

//GET NAMES
router.get("/", async (req, res) => {
  let names = {};
  let props = ['prefix', 'main', 'suffix'];
  for (prop of props) {

    names[prop] = [];

    let totalNames = await Plushie.find({})
      .where(`${prop}`, true)
      .select({ name: 1 });

    for (let i = 0; i < 5; i++) {
      let max = totalNames.length;
      let random = Math.floor(Math.random() * max);
      names[prop].push(totalNames[random].name); 
    }
  }
  res.send(names);
});

module.exports = router;
