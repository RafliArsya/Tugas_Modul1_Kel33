var myArray = [];
var outArray = {};

const addMerk = () => {
    let input = document.getElementById("addMerk").value;
    myArray.push(input.toUpperCase());
}

const showMerk = () => {
    let text = "";
    //const outArr = myArray.reduce((idx, val) => idx.set(val, (idx.get(val) || 0) + 1), new Map());
    /*const outArr = myArray.reduce((idx, val) => {
        idx[val] = (idx[val] || 0) +1;
        return idx;
    }, {});*/
    const outArr = myArray.reduce((idx, val) => idx.set(val, (idx.get(val) || 0) + 1), new Map());
    outArr.forEach((item, idx) => { 
        text += idx + ": " + item + "<br>";  
    });
    document.getElementById("outMerk").innerHTML = text;
    //console.log(text);
    //console.log(outArr);
    //document.getElementById("outMerk").innerHTML = [...map.keys()];
    //document.getElementById("outVal").innerHTML = [...map.values()];
}