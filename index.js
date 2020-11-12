console.log("Hello Manga Readers");

function success(data) {
    console.log("success=" + data);
    $("#MangaList").text("Manga List = " + data);
}

function send(number) {
    let url = "/getMangalist/number/" + number;
    console.log(url);
    $.get(url, success);
}

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
    
    send(n);
    
    console.log(n);
    
    console.log("Score sent to server" + n);
}


//start button that intiates conversation
function setup() {
    //$("#Questions").click(hide);
    $("#submit").click(getSelectValues);
}

$(document).ready(setup);

