const express = require('express');
const port = 3100;
const app = express();



app.listen(port, function() {
    console.log('Server listening on port ' + port )
})