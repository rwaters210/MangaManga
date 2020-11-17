class list {


//Insert getMangalist function;
//insert dictionary/ api

      getMangalist(n) {
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
        let x = lib[1];
        let y = lib[2];
        
        let answer = "";
        
        //let n = req.params.number;
        
        if(n == "149") {
            answer += x['Title'];
            //console.log(dict.one.Title);
            return answer;
            //res.send(answer);
            console.log(answer);
        } else if (n == "147"){
            answer += y['Title'];
            return answer;
            //res.send(answer);
            console.log(answer);
        } else {
            return "Other List"
        }
    }
}
exports.list = list;
