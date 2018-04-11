var ts = 0.5;
function startFunction()
{
TweenLite.set("#price_mirror", {alpha:0});
	TweenLite.set("#text", {alpha:0, y:-10});
	TweenLite.set("#price", {alpha:0, scale:1.5});
	TweenLite.set("#packshot", {alpha:0,scale:0.4});
	TweenLite.set("#cta", {alpha:1, scale:1});
	step1();
	}


function step1(){
	TweenLite.to("#packshot", .3,{alpha:1, scale:1.1,ease:Linear.easeOut, onComplete:packshot_moving});
	
	TweenLite.to("#text", ts,{alpha:1, y:0, delay:2*ts});
	TweenLite.delayedCall(2,popup);
}

function packshot_moving(){
	price();
	TweenLite.to("#packshot", .2,{scale:1, ease:Linear.easeIn});
}
function popup(){
				TweenLite.to("#cta", .2,{scale:1.1,delay:.5, ease:Linear.easeOut, onComplete:popup2 });
		
		}
	function popup2(){
			TweenLite.to("#cta", .2,{scale:1, ease:Linear.easeIn, onComplete:step_price});
		}


function price(){
	TweenLite.to("#text", ts,{alpha:1, y:0});
	TweenLite.to("#price", .3,{alpha:1,scale:1,ease:Sine.easeIn, delay:.3,onComplete:price_mirror});
}
function price_mirror(){
	TweenLite.set("#price_mirror", {alpha:1});
	TweenLite.to("#price_mirror", .5, {scale:1.5,alpha:0})
}


function step_price(){
	TweenLite.to("#price", .3,{scale:1.1, ease:Linear.easeOut, onComplete:step_price0 });
}
function step_price0(){
	TweenLite.to("#price", .3,{scale:1, ease:Linear.easeIn, onComplete:popup_second});
}

function popup_second(){
				TweenLite.to("#cta", .2,{scale:1.1, ease:Linear.easeOut, onComplete:popup_second_b });
		
		}
	function popup_second_b(){
			TweenLite.to("#cta", .2,{scale:1, ease:Linear.easeIn});
		}
/*
function popup3(){
				TweenLite.to("#cta", .2,{scale:1.1,delay:1.5, ease:Linear.easeOut, onComplete:popup4 });
		
		}
	function popup4(){
			TweenLite.to("#cta", .2,{scale:1, ease:Linear.easeIn});
		}
*/
startFunction();