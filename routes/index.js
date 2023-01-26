var express = require('express');
var router = express.Router();

const db = require("../models/index")

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
    console.log("error!" + err)
  })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Welcome!', menuId:'home'});
});

/* GET test page */
router.get('/test', function(req, res, next) {
  res.render('test', {page:'Content goes here!', menuId:'test'});
});

/* GET interview page */
router.get('/interview', function(req, res, next) {
  res.render('interview', {page:'Interview preparation resources', menuId:'interview'});
});

/* GET add interview question pages */
router.get('/addQuestions', function(req, res, next) {
  const QuestionDAO = require("../sequelize/daos/questionDAO")
  QuestionDAO.getAllQuestions().then(questions => res.render('addQuestions', {page:'Add Questions', menuId:'addQuestions', questions: questions}));
});

/* POST add question result page */
router.post('/result', function(req, res, next) {
  const QuestionDAO = require("../sequelize/daos/questionDAO")
  const body = req.body
  QuestionDAO.postQuestion(body.question, body.answer).then(
    result => res.render('result', {page:'Show results here', menuId: 'result', result: result})
  )
})

/* POST add recording result page */
router.post('/recordingResult', function(req, res, next) {
  const QuestionDAO = require("../sequelize/daos/questionDAO")
  const form = formidable({});

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    const response = ({ fields, files });
    QuestionDAO.uploadFile(files).then(res.render('test', {page:'Content goes here!', menuId:'test'}))
  });
})

/* GET knowledge page */
router.get('/knowledge', function(req, res, next) {
  res.render('knowledge', {page:'Knowledge goes here!', menuId:'knowledge'});
});

/* GET attend page */
router.get('/attend', function(req, res, next) {
  res.render('attend', {page:'Attendance goes here!', menuId:'attend'});
});

/* GET help page */
router.get('/help', function(req, res, next) {
  res.render('help', {page:'Help goes here!', menuId:'help'});
});

/* GET train page */
router.get('/train', function(req, res, next) {
  res.render('train', {page:'Training goes here!', menuId:'train'});
});

/* GET recruit page */
router.get('/recruit', function(req, res, next) {
  res.render('recruit', {page:'Recruit goes here!', menuId:'recruit'});
});

/* GET social page */
router.get('/social', function(req, res, next) {
  res.render('social', {page:'Social goes here!', menuId:'social'});
});

/* GET profile page */
router.get('/profile', function(req, res, next) {
  res.render('profile', {page:'Profile goes here!', menuId:'profile'});
});

/* GET calendar page */
router.get('/calendar', function(req, res, next) {
  res.render('calendar', {page:'Profile goes here!', menuId:'calendar'});
});

module.exports = router;
