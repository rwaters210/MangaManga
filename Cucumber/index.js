class index{
    
        getSelectValues(selectedValue1, selectedValue2, selectedValue3) {
        //var selectedValue1 = document.getElementById("list1").value;
        //var selectedValue2 = document.getElementById("list2").value;
        //var selectedValue3 = document.getElementById("list3").value;
        
        let n = "";
        switch(selectedValue1) {
            case "Teen":
                n += "1";
            break;
            case "Young Adult":
                n += "2";
            break;
            case "Adult":
                n += "3";
            break;    
            default:
                //nothing
        }
        
        switch(selectedValue2) {
            case "Action":
                n += "4";
            break;
            case "Thriller":
                n += "5";
            break;
            case "Fantasy":
                n += "6";
            break;    
            default:
                //nothing
        }
        
        switch(selectedValue3) {
            case "Short":
                n += "7";
            break;
            case "Medium":
                n += "8";
            break;
            case "Long":
                n += "9";
            break;    
            default:
                //nothing
        }
        
        console.log(n);
        return n;
    }
}
exports.index = index;
