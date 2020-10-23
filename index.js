console.log("Hello world");

function success(data) {
    console.log("success=" + data);
    $("#answer").text("Answer=" + data);
}

//function to prompt user
function doQuestions() {
    console.log("Ask the doQuestions")
    
    
}


function hide() {
     var x = document.getElementById("Questions");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    //document.getElementById("Questions").classList.toggle("show");
    console.log("It worked");
}

function getList() {
    alert("Here is the list of books:.....");
    console.log("List Retrieved");
}


//start button that intiates conversation
function setup() {
    $("#start").click(hide);
}

$(document).ready(setup);
