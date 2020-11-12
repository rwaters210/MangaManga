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
    },
    
    3: {
        Title: "The Title 3", 
        Author: "The Author 3", 
        Published: "The Published Date 3" 
    },
    
    4: {
        Title: "The Title 4", 
        Author: "The Author 4", 
        Published: "The Published Date 4" 
    },
    
    5: {
        Title: "The Title 5", 
        Author: "The Author 5", 
        Published: "The Published Date 5" 
    },
    
    6: {
        Title: "The Title 6", 
        Author: "The Author 6", 
        Published: "The Published Date 6" 
    },
    
    7: {
        Title: "The Title 7", 
        Author: "The Author 7", 
        Published: "The Published Date 7" 
    },
    
    8: {
        Title: "The Title 8", 
        Author: "The Author 8", 
        Published: "The Published Date 8" 
    },
    
    9: {
        Title: "The Title 9", 
        Author: "The Author 9", 
        Published: "The Published Date 9" 
    },
    
    10:{
        Title: "The Title 10", 
        Author: "The Author 10", 
        Published: "The Published Date 10" 
    },
    
    11:{
        Title: "The Title 11", 
        Author: "The Author 11", 
        Published: "The Published Date 11" 
    },
    
    12:{
        Title: "The Title 12", 
        Author: "The Author 12", 
        Published: "The Published Date 12" 
    },
    
    13:{
        Title: "The Title 13", 
        Author: "The Author 13", 
        Published: "The Published Date 13" 
    },
    
    14:{
        Title: "The Title 14", 
        Author: "The Author 14", 
        Published: "The Published Date 14" 
    },
    
    15:{
        Title: "The Title 15", 
        Author: "The Author 15", 
        Published: "The Published Date 15" 
    },
    
    16:{
        Title: "The Title 16", 
        Author: "The Author 16", 
        Published: "The Published Date 16" 
    },
    
    17:{
        Title: "The Title 17", 
        Author: "The Author 17", 
        Published: "The Published Date 17" 
    },
    
    18:{
        Title: "The Title 18", 
        Author: "The Author 18", 
        Published: "The Published Date 18" 
    },
    
    19:{
        Title: "The Title 19", 
        Author: "The Author 19", 
        Published: "The Published Date 19" 
    },
    
    20:{
        Title: "The Title 20", 
        Author: "The Author 20", 
        Published: "The Published Date 20" 
    },
    
    21:{
        Title: "The Title 21", 
        Author: "The Author 21", 
        Published: "The Published Date 21" 
    },
    
    22:{
        Title: "The Title 22", 
        Author: "The Author 22", 
        Published: "The Published Date 22" 
    },
    
    23:{
        Title: "The Title 23", 
        Author: "The Author 23", 
        Published: "The Published Date 23" 
    },
    
    24:{
        Title: "The Title 24", 
        Author: "The Author 24", 
        Published: "The Published Date 24" 
    },
    
    25:{
        Title: "The Title 25", 
        Author: "The Author 25", 
        Published: "The Published Date 25" 
    },
    
    26:{
        Title: "The Title 26", 
        Author: "The Author 26", 
        Published: "The Published Date 26" 
    },
    
    27:{
        Title: "The Title 27", 
        Author: "The Author 27", 
        Published: "The Published Date 27" 
=======
>>>>>>> d9a5234639a9ff03e49c4453b096f7f8bf177758
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