function addClass(o, c){
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    if (re.test(o.className)) return
    o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}

function removeClass(o, c){
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}
var clickFlag = 0;



var navButton = document.getElementById('js-nav-button');
navButton.onclick = function() {
    clickFlag = clickFlag + 1;
    if (clickFlag%2 != 0) {
        addClass(document.getElementById('cont-left'),'left_flip-left');
        addClass(document.getElementById('cont-right'),'left-flip-right');
    } else {
        removeClass(document.getElementById('cont-left'),'left_flip-left');
        removeClass(document.getElementById('cont-right'),'left-flip-right');
    }
}


var informationBoxFirst = document.getElementById('js-information-1');
var informationBoxSecond = document.getElementById('js-information-2');
var informationBoxThird = document.getElementById('js-information-3');

var flagInformationBoxFirst = 0;
var flagInformationBoxSecond = 0;
var flagInformationBoxThird = 0;

informationBoxFirst.onclick = function() {
    var numberBox = document.getElementsByClassName('information__wrapper');
    flagInformationBoxFirst = flagInformationBoxFirst +1;
    flagInformationBoxSecond = 0;
    flagInformationBoxThird = 0;
    if (flagInformationBoxFirst%2 != 0) {
        console.log(numberBox);
        for (var i=0; i < numberBox.length; i++){
            removeClass(numberBox[i],'information__wrapper_visible');
        }
        addClass(numberBox[0],'information__wrapper_visible');
    } else {
        removeClass(numberBox[0],'information__wrapper_visible');
    }
}

informationBoxSecond.onclick = function() {
    var numberBox = document.getElementsByClassName('information__wrapper');
    flagInformationBoxSecond = flagInformationBoxSecond +1;
    flagInformationBoxFirst = 0;
    flagInformationBoxThird = 0;
    if (flagInformationBoxSecond%2 != 0) {
        for (var i=0; i < numberBox.length; i++){
            removeClass(numberBox[i],'information__wrapper_visible');
        }
        addClass(numberBox[1],'information__wrapper_visible');
    } else {
        removeClass(numberBox[1],'information__wrapper_visible');
    }
}

informationBoxThird.onclick = function() {
    var numberBox = document.getElementsByClassName('information__wrapper');
    flagInformationBoxThird = flagInformationBoxThird +1;
    flagInformationBoxSecond = 0;
    flagInformationBoxFirst = 0;
    if (flagInformationBoxThird%2 != 0) {
        for (var i=0; i < numberBox.length; i++){
            removeClass(numberBox[i],'information__wrapper_visible');
        }
        addClass(numberBox[2],'information__wrapper_visible');
    } else {
        removeClass(numberBox[2],'information__wrapper_visible');
    }
}

//informationBoxFirst.onclick = function() {
//    var numberBox = document.getElementsByClassName('information__wrapper');
//    console.log(numberBox);
//    for (var i=0; i<numberBox.length; i++){
//        removeClass(numberBox[i],'information__wrapper_visible');
//    }
//    addClass(numberBox[0],'information__wrapper_visible');
//}






