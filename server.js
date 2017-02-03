const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  let acceptedLocales = req.header('Accept-Language');
  res.send(`Locales: ${acceptedLocales}`)
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
})
