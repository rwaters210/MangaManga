const expect = require("chai").expect;
const answer = require("./score.js");
const answer2 = require("./list.js");


describe("#getSelectValues()", function() {
   
   it("get score to match to list", function() {
      
      let s = new answer.score();
      
      expect(s.getSelectValues("Teen", "Thriller", "Long")).to.equal("159");
       
   });
   
   it("get score to match to list", function() {
      
      let s = new answer.score();
      
      expect(s.getSelectValues("Teen", "Action", "Short")).to.equal("147");
      
   });
   
   it("get score to match to list", function() {
      
      let s = new answer.score();
      
      expect(s.getSelectValues("Young Adult", "Fantasy", "Medium")).to.equal("268");
      
   });
   
});

describe("#getMangaList()", function() {
   
   it("get list", function() {
      
      let x = new answer2.list();
      
      expect(x.getMangalist("149")).to.equal("My Hero Academia, The Promise Neverland, & Naruto");
       
   });
   
   
   it("get list", function() {
      
      let x = new answer2.list();
      
      expect(x.getMangalist("147")).to.equal("The Title 2");
      
       
   });
   
   
   it("get list", function() {
      
      let x = new answer2.list();
      
      expect(x.getMangalist(18)).to.equal("Other List");
       
   });
    
});
