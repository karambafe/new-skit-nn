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
