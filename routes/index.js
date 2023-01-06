var express = require('express');
var router = express.Router();

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
  res.render('interview', {page:'Interview goes here!', menuId:'interview'});
});

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

module.exports = router;
