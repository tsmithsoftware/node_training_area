var express = require('express');
var router = express.Router();

const { Sequelize } = require("sequelize");

/** Check database connection before loading webapp */
const sequelize = new Sequelize("db", "user", "password", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    timestamps: false
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Welcome!', menuId:'home'});
});

/* GET test page */
router.get('/test', function(req, res, next) {
  res.render('test', {page:'Content goes here!', menuId:'test'});
});

/* GET test page */
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

/* GET test page */
router.get('/knowledge', function(req, res, next) {
  res.render('knowledge', {page:'Knowledge goes here!', menuId:'knowledge'});
});

/* GET test page */
router.get('/attend', function(req, res, next) {
  res.render('attend', {page:'Attendance goes here!', menuId:'attend'});
});

/* GET test page */
router.get('/help', function(req, res, next) {
  res.render('help', {page:'Help goes here!', menuId:'help'});
});

/* GET test page */
router.get('/train', function(req, res, next) {
  res.render('train', {page:'Training goes here!', menuId:'train'});
});

/* GET test page */
router.get('/recruit', function(req, res, next) {
  res.render('recruit', {page:'Recruit goes here!', menuId:'recruit'});
});

/* GET test page */
router.get('/social', function(req, res, next) {
  res.render('social', {page:'Social goes here!', menuId:'social'});
});

/* GET test page */
router.get('/profile', function(req, res, next) {
  res.render('profile', {page:'Profile goes here!', menuId:'profile'});
});

/* GET test page */
router.get('/calendar', function(req, res, next) {
  res.render('calendar', {page:'Profile goes here!', menuId:'calendar'});
});

module.exports = router;
