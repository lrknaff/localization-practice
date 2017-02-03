const express = require('express');
const app = express();
const path = require('path');
const i18n = require('./i18n.js');

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Localize';

app.use(i18n);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index.ejs');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
})
