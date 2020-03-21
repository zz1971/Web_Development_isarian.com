var i1;
var slideNumber=1;
window.document.addEventListener("load", play());
window.document.getElementById('slider').addEventListener("mouseout", resume);
function play(){
    i1=setInterval(forward, 7000);
}

function forward(){
    slideNumber++;
    if(slideNumber>=5) slideNumber=1;
    slideId="slide"+slideNumber;
    zIndexReset();
    opacityReset();
    document.getElementById(slideId).style.opacity=1;
    document.getElementById(slideId).style.zIndex=1;
}

function next(){
    clearInterval(i1);
    forward();
    play();
}

function backward(){
    clearInterval(i1);
    slideNumber--;
    if(slideNumber<=0) slideNumber=4;
    slideId="slide"+slideNumber;
    zIndexReset();
    opacityReset();
    document.getElementById(slideId).style.opacity=1;
    document.getElementById(slideId).style.zIndex=1;
    play();
}

function opacityReset(){
    for(n=1;n<=4;n++){
        var slideName="slide"+n;
        document.getElementById(slideName).style.opacity=0;
    }
}

function zIndexReset(){

    for(n=1;n<=4;n++){
        var slideName="slide"+n;
        document.getElementById(slideName).style.zIndex=0;
    }
}



function slide1(){
    clearInterval(i1);
    slideNumber=0;
    forward();
    play();
	clearInterval(i2);
    thumbNumber=0;
    forward1();
    play1();
	
}
function slide2(){
    clearInterval(i1);
    slideNumber=1;
    forward();
    play();
	clearInterval(i2);
    thumbNumber=1;
    forward1();
    play1();
}
function slide3(){
    clearInterval(i1);
    slideNumber=2;
    forward();
    play();
	clearInterval(i2);
    thumbNumber=2;
    forward1();
    play1();
}
function slide4(){
    clearInterval(i1);
    slideNumber=3;
    forward();
    play();
	clearInterval(i2);
    thumbNumber=3;
    forward1();
    play1();
}


function pause(){
    clearInterval(i1);
	clearInterval(i2);
}
function resume(){
    //alert(1);
    clearInterval(i1);
    play();
	clearInterval(i2);
    play1();
}
var i2;
var thumbNumber=1;
window.document.addEventListener("load", play1());
window.document.getElementById('thumbs').addEventListener("mouseout", resume);
function play1(){
    i2=setInterval(forward1, 7000);
}

function forward1(){
    thumbNumber++;
    if(thumbNumber>=5) thumbNumber=1;
    thumbId="thumb"+thumbNumber;
    zIndexReset1();
    opacityReset1();
    document.getElementById(thumbId).style.opacity=1;
    document.getElementById(thumbId).style.zIndex=1;
}

function next1(){
    clearInterval(i2);
    forward1();
    play1();
}

function backward1(){
    clearInterval(i2);
    thumbNumber--;
    if(thumbNumber<=0) thumbNumber=4;
    thumbId="thumb"+thumbNumber;
    zIndexReset1();
    opacityReset1();
    document.getElementById(thumbId).style.opacity=1;
    document.getElementById(thumbId).style.zIndex=1;
    play1();
}

function opacityReset1(){
    for(n=1;n<=4;n++){
        var thumbName="thumb"+n;
        document.getElementById(thumbName).style.opacity=0;
    }
}

function zIndexReset1(){

    for(n=1;n<=4;n++){
        var thumbName="thumb"+n;
        document.getElementById(thumbName).style.zIndex=0;
    }
}