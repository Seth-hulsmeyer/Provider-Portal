// This will require the db from the index/models.js
const db = require("../models");

// Routes

module.exports = (app) => {
  app.post("/members", (req, res) => {
    db.Clients.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      insurance: req.body.insurance,
    }).then((data) => res.json(data));
  });
  // get ALL clients
  app.get("/api/add-clients", (req, res) => {
    // findAll THE clients that have been added to the database
    db.Clients.findAll({}).then((data) => res.json(data));
  });

  // get ALL providers
  app.get("/providers", (req, res) => {
    db.Providers.findAll({}).then((data) => res.json(data));
  });

  // add clients
  // sam edit 1/12

  // add providers
  app.post("/provider/add", (req, res) => {
    db.Providers.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      company: req.body.company,
      practice_industry: req.body.practice_industry,
    }).then((data) => res.json(data));
  });
};
