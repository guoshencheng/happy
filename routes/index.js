var express = require('express');
var axios = require('axios')
var router = express.Router();

var getDays = (from) => {
  var now = new Date();
  return Math.floor((now.getTime() - from) / (24 * 60 * 60 * 1000))
}

var getMonths = (from) => {

}

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get("http://localhost:3000/db.json").then(value => {
    var array = value.data
    items = array.map(item => {
      return Object.assign({}, item, {days: getDays(item.time)})
    })
    res.render('index', { title: 'Express', items});
  }).catch(reason => {
    next(reason)
  })
});

module.exports = router;
