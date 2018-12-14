const express = require('express');
const plushies = require("../routes/plushies");

module.exports = function(app) {
    app.use(express.json());

    //Routes
    app.use("/api/plushies", plushies);
};