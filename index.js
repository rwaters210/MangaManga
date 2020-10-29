console.log("Hello world");

function success(data) {
    console.log("success=" + data);
    $("#answer").text("Answer=" + data);
}


let dict = { 
    one: {
        Title: "My Hero Academia, The Promise Neverland, & Naruto", 
        Author: "The Author", 
        Published: "The Published Date" 
    },
    
    two: {
        Title: "The Title 2", 
        Author: "The Author 2", 
        Published: "The Published Date 2" 
    }
    
            };


function hide() {
     let x = document.getElementById("Questions");
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

function getSelectValues() {
    var selectedValue1 = document.getElementById("list1").value;
    var selectedValue2 = document.getElementById("list2").value;
    var selectedValue3 = document.getElementById("list3").value;
    
    let n = 0;
    switch(selectedValue1) {
        case "Teen":
            n += 1;
        break;
        case "Young Adult":
            n += 2;
        break;
        case "Adult":
            n += 3;
        break;    
        default:
            //nothing
    }
    
    switch(selectedValue2) {
        case "Action":
            n += 1;
        break;
        case "Thriller":
            n += 2;
        break;
        case "Fantasy":
            n += 3;
        break;    
        default:
            //nothing
    }
    
    switch(selectedValue3) {
        case "Short":
            n += 1;
        break;
        case "Medium":
            n += 2;
        break;
        case "Long":
            n += 3;
        break;    
        default:
            //nothing
    }
    
    //let x = getMangalist(n);
    
    document.getElementById("MangaList").innerHTML = getMangalist(n);
    
    console.log(n);
    
    console.log("Values Selected");
}

function getMangalist(number) {
    if(number == 6) {
        //let x = dict[2];
        //let answer = "";
        //answer += x['Title'];
        console.log(dict[one].Title);
        return (dict[one].Title + dict[one].Author);
    } else {
        return "Other List...";
    }
}



//start button that intiates conversation
function setup() {
    $("#start").click(hide);
}

$(document).ready(setup);
