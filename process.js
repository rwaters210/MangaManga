console.log("Hellllloooooo!!!!");

const express = require('express');
const app = express();
let port = process.env.PORT;
    if (port == null || port == "") {
      port = 80;
    }
    
function index(req, res) {
    res.redirect('index.html');
}


//create array of dictionary for manga database

var lib = { 
    1: {
        Title: "My Hero Academia, The Promise Neverland, & Naruto", 
        Author: "The Author", 
        Published: "The Published Date" 
    },
    
    2: {
        Title: "The Title 2", 
        Author: "The Author 2", 
        Published: "The Published Date 2" 
    }
    
};

//Insert getMangalist function;
//insert dictionary/ api

function getMangalist(req, res) {
    let x = lib[1];
    let y = lib[2];
    
    let answer = "Other List";
    
    let n = req.params.number;
    
    if(n == 6) {
        answer += x['Title'];
        //console.log(dict.one.Title);
        //return answer;
        res.send(answer);
        console.log(answer);
        return;
    } else if (n == 3){
        answer += y['Title'];
        //return answer;
        res.send(answer);
        console.log(answer);
        return;
    } else {
        res.send(answer);
    }
}

app.use(express.static("static"));

app.get('/', index);

// Calling "/getMangalist/..." invokes the calculate function
app.get('/getMangalist/number/:number', getMangalist);

//Start Express listening at the given port
app.listen(port, function() {
    console.log("App running at port=" + port);
});
