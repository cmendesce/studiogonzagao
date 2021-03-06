var mongoose = require ("mongoose");
var mongooseCachebox = require("mongoose-cachebox");

var uristring = process.env.DB_URI;

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. \n' + err);
  }
});

var options = {
  cache: true, // start caching
  ttl: 30 // 30 seconds
};

// adding mongoose cachebox
mongooseCachebox(mongoose, options);

mongoose.set('debug', true);