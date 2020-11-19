const cucumber = require('cucumber');
const Given = cucumber.Given;
const When = cucumber.When;
const Then = cucumber.Then;

const answer = require("./index.js");
const answer2 = require("./process.js");

let x = new answer.index();
let y = new answer2.process();

const expect = require('assert');


Given('that my user score is 259', function() {
    x.getSelectValues("Young Adult", "Thriller", "Long");
});

When('I should get the list that matches the 259 score', function() {
    y.getMangalist(259);
});

Then('I will be given the list Save Me, Your Throne, Usogui', function() {
    assert(y.getMangalist(259) == "Save Me, Your Throne, Usogui");
});

Given('that my user score is 169', function() {
    x.getSelectValues("Teen", "Fantasy", "Long");
});

When('I should get the list that matches the 169 score', function() {
    y.getMangalist(169);
});

Then('I will be given the list Save Me, Your Throne, Usogui', function() {
    assert(y.getMangalist(169) == "Full Metal Alchemist, Death Note ,One Piece");
});
