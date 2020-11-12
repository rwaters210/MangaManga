class score{
    
        getSelectValues(selectedValue1, selectedValue2, selectedValue3) {
        
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
        
        console.log(n);
        return n;
    }
}
exports.score = score;
