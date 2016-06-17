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
        var timerId = setInterval(function() {
            var widthOfWindow = document.documentElement.clientWidth;
            console.log(widthOfWindow);
            if (widthOfWindow > 920) {
                removeClass(document.getElementById('cont-left'),'left_flip-left');
                removeClass(document.getElementById('cont-right'),'left-flip-right');
                clickFlag = 0;
                clearInterval(timerId);
            }
        },500);

    } else {
        removeClass(document.getElementById('cont-left'),'left_flip-left');
        removeClass(document.getElementById('cont-right'),'left-flip-right');
    }
}

// начать повторы с интервалом 2 сек
//var timerId = setInterval(function() {
//  alert( "тик" );
//}, 2000);
//
//// через 5 сек остановить повторы
//setTimeout(function() {
//  clearInterval(timerId);
//  alert( 'стоп' );
//}, 5000);


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

function anchor(skitAnchor,timeAnchor) {
	$(skitAnchor).on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, timeAnchor);
    });
}

$(document).ready(function(){
	anchor('#menu',1000);
	anchor('#cont-right',1000);
	anchor('#price-information',1000);
	anchor('#js-director-1',600);
	anchor('#js-director-2',800);
	anchor('#js-map',1300);
	$('#footer-arrow-up').click(function() {
        event.preventDefault();
        $('body,html').animate({scrollTop:0},1100);
    	return false;
    });
});

var sliderButtonPreviuos= document.getElementsByClassName('js-previous');
var sliderButtonNext= document.getElementsByClassName('js-next');
var sliderItem = document.getElementsByClassName('js-slider-count');

//var widthOfWindowForSlider = document.documentElement.clientWidth;
//console.log(widthOfWindowForSlider);
//if (widthOfWindowForSlider < 650) {
//	document.getElementsByClassName('mainpage__slide-item')[0].classList.remove('mainpage__slide-item_active');
//	document.getElementsByClassName('mainpage__slide-item')[0].classList.remove('js-slider-count');
//	document.getElementsByClassName('mainpage__slide-item')[1].classList.add('mainpage__slide-item_video');
//	document.getElementsByClassName('mainpage__slide-item')[0].classList.remove('mainpage__slide-item');
//	document.getElementsByClassName('mainpage__slide-item')[1].classList.add('mainpage__slide-item_active');
//}



var sliderFlag = 0;
var sliderCount = document.getElementsByClassName('js-slider-count').length;

sliderButtonNext[0].addEventListener('click', function() {
	if (sliderFlag == sliderCount-1) {
		document.getElementsByClassName('mainpage__slide-item')[sliderCount-1].classList.remove('mainpage__slide-item_active');
		sliderFlag = 0;
		document.getElementsByClassName('mainpage__slide-item')[sliderFlag].classList.add('mainpage__slide-item_active');
	} else {
		document.getElementsByClassName('mainpage__slide-item')[sliderFlag].classList.remove('mainpage__slide-item_active');
		document.getElementsByClassName('mainpage__slide-item')[sliderFlag+1].classList.add('mainpage__slide-item_active');
		sliderFlag = sliderFlag + 1;
	}
})

sliderButtonPreviuos[0].addEventListener('click', function() {
	if (sliderFlag == 0) {
		document.getElementsByClassName('mainpage__slide-item')[sliderFlag].classList.remove('mainpage__slide-item_active');
		sliderFlag = sliderCount-1;
		document.getElementsByClassName('mainpage__slide-item')[sliderCount-1].classList.add('mainpage__slide-item_active');

	} else {
		document.getElementsByClassName('mainpage__slide-item')[sliderFlag].classList.remove('mainpage__slide-item_active');
		document.getElementsByClassName('mainpage__slide-item')[sliderFlag-1].classList.add('mainpage__slide-item_active');
		sliderFlag = sliderFlag-1;
	}
})
