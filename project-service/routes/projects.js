var express = require('express');
var router = express.Router();
var projects = require('../data/projects');
var _ = require('lodash');

router.use('/:id', (req, res, next) => {
  let project = projects.filter((p) => {
    return p.id == req.params.id;
  });
  if (project) {
    return res.json(project[0]);
  }
  return res.sendStatus(404);
});
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(projects);
});

router.patch('/:id', function (req, res, next) {
  Object.entries(req.body).forEach((item) => {
    const key = item[0];
    const value = item[1];
    req.project[key] = value;
    console.log(req.project);
  });

  res.json(req.project);
});

router.get('/:id', function (req, res, next) {
  res.json(_.filter(projects, { id: req.params.id })[0]);
});

module.exports = router;
