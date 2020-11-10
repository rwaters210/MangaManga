const expect = require("chai").expect;
const answer = require("./score.js");
const answer2 = require("./list.js");


describe("#getSelectValues()", function() {
   
   it("get score to match to list", function() {
      
      let s = new answer.score();
      
      expect(s.getSelectValues("Teen", "Thriller", "Long")).to.equal(6);
       
   });
    
});

describe("#getMangaList()", function() {
   
   it("get list", function() {
      
      let x = new answer2.list();
      
      expect(x.getMangalist(6)).to.equal("My Hero Academia, The Promise Neverland, & Naruto");
       
   });
    
});
