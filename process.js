const express = require('express');
const app = express();
let port = process.env.PORT;
    if (port == null || port == "") {
      port = 80;
    }
    
function index(req, res) {
    res.redirect('index.html');
}







//Start Express listening at the given port
app.listen(port, function() {
    console.log("App running at port=" + port);
});
