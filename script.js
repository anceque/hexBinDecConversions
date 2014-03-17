function convertNumToBin(decNum) {
    var binNum = [];

    while (decNum >= 0 ) {
        binNum.push(decNum % 2);
        decNum = Math.floor(decNum / 2);
        if (decNum === 0) {
            break;
        }
    }
    return binNum.reverse().join("");
}

function convertNumToHex(decNum) {
    var hexNum = [];

    while (decNum >= 0 ) {
        hexNum.push(decNum % 16);
        decNum = Math.floor(decNum / 16);
        if (decNum === 0) {
            break;
        }
    }
    for (var i=0; i<hexNum.length; i++) {
        switch (hexNum[i]) {
            case 10: hexNum[i] = 'A';
                break;
            case 11: hexNum[i] = 'B';
                break;
            case 12: hexNum[i] = 'C';
                break;
            case 13: hexNum[i] = 'D';
                break;
            case 14: hexNum[i] = 'E';
                break;
            case 15: hexNum[i] = 'F';
                break;
        }
    }
    return hexNum.reverse().join("");
}

function getDecimalInput() {
    return document.getElementById("decimal").value;
}

function getConversionChoice() {
   if (document.getElementById("binary").checked) {
       document.getElementById("conversionAnswer").innerHTML = convertNumToBin(getDecimalInput());
   } else if (document.getElementById("hexadecimal").checked) {
       document.getElementById("conversionAnswer").innerHTML = convertNumToHex(getDecimalInput());
   } else {
       document.getElementById("conversionAnswer").innerHTML = "Please, choose the conversion type.";
   }
}