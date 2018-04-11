function startFunction(){/*
	TweenMax.set("#logo", {scale:.7, y:-45,x:-95});*/
	TweenMax.set("#trixes", {alpha:1});
	TweenMax.set("#text1", {alpha:0});
	TweenMax.set("#text_final", {alpha:0, y:10});
	TweenMax.set("#cta", {alpha:0});
	TweenMax.set("#panaki", {rotation:-14, transformOrigin:"bottom center"});
	/**/step2();
}
function step2(){
	TweenMax.to("#panaki", 2, {rotation:30,y:80,scale:1.15, transformOrigin:"bottom center", ease:Cubic.easeInOut, onComplete:steppopuppanaki});
	TweenMax.to("#shadow_line", 2, {y:80,x:20, ease:Cubic.easeInOut});
	TweenMax.to("#trixes1", .5, {alpha:0,y:-10,x:-10,scale:.7, ease:Cubic.easeOut, delay: .9});
	TweenMax.to("#trixes2", .5, {alpha:0,y:-10,x:-10,scale:.7, ease:Cubic.easeOut, delay: .925});
	TweenMax.to("#trixes3", .5, {alpha:0,y:-10,x:-10,scale:.7, ease:Cubic.easeOut, delay:.95});
TweenMax.delayedCall(2, step3);
}
function step3(){
	TweenMax.to("#panaki", 2, {scale:1, rotation:-14,y:0, transformOrigin:"bottom center", ease:Cubic.easeInOut});
	TweenMax.to("#shadow_line", 2, {y:0, ease:Cubic.easeInOut});
	TweenMax.to("#text1", .25, {alpha:1,y:0, ease:Linear.easeNone, delay:.95});
	TweenMax.delayedCall(3, step4);
}
function step4(){
	TweenMax.to("#panaki", 1, {x:-250});
	TweenMax.to("#shadow_line",1, {x:-250});
	TweenMax.to("#text1", .35, {alpha:0});/*
	TweenMax.to("#logo", 1, {scale:1,y:0,x:0,delay:.35});*/
	TweenMax.to("#text_final", 1, {alpha:1,y:0,delay:.35});
	TweenMax.to("#cta", 1, {alpha:1,y:0,delay:.35, onComplete:popup});
}

function steppopuppanaki(){
		TweenLite.to("#panaki", .3,{scale:1.01, delay:1.5, ease:Linear.easeOut, onComplete:steppopuppanaki2 });
		
		}
	function steppopuppanaki2(){
		TweenLite.to("#panaki", .3,{scale:1, ease:Linear.easeIn});
		}


function popup(){
		TweenLite.to("#cta", .3,{scale:1.1, delay:.5, ease:Linear.easeOut, onComplete:popup2 });
		
		}
	function popup2(){
		TweenLite.to("#cta", .3,{scale:1, ease:Linear.easeIn});
		}		
	/**/
startFunction();
