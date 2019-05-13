const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');


require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.get('*', function (req, res) {
  res.json({
    status: 404,
    message: "You've come to the wrong place 🗺🙅🏻‍"
  });

});


app.listen(PORT, () => console.log(`🌍 => listening to http://localhost:${PORT}`));





