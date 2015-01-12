var express    = require('express');
var serveIndex = require('serve-index');

var app = express();

var options = {
  filter: function(filename, index, files, dir) {
    return filename.indexOf('.jpg') > 0; 
  },
  icons: true,
  view: 'details'
};

// Serve URLs like /ftp/thing as public/ftp/thing
app.use('/', serveIndex('./', options));
app.use(express.static(__dirname));
app.listen(8080);