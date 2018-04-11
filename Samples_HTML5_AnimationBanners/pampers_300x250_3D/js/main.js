var ts = .5;

function startFunction()
{
	TweenMax.set("#cta", {scale:.8, y:4});
	TweenMax.set("#pack", {scale:1, x:14, alpha:0});/*1.15 become at the last frame*/
	TweenMax.set("#star", {alpha:0,scale:.35, y:-10, transformStyle: "preserve-3d", rotationY:-45, rotationX:45, transformPerspective: 0,transformOrigin: "center center -200", ease: Expo.easeOut});
	TweenMax.set("#price", {scale:.55, y:-10, alpha:0});/*na ginei .355*/
	TweenMax.set("#text11", {y:30});
	TweenMax.set("#text12", {y:30});
	TweenMax.set("#text21", {y:30});
	TweenMax.set("#text22", {y:30});
	step2();
}
function step2(){
	TweenMax.to("#pack", .5, {alpha:1, ease:Linear.easeNone});
	TweenMax.to("#star", 1, {alpha:1, rotationY:0,rotationX:0,transformPerspective: 45, delay:.5});
	TweenMax.to("#price", .5, {scale:.355, ease:Linear.easeNone, delay:1.25, alpha:1});
	TweenMax.to("#text11", ts, {y:0, delay:ts, ease:Circ.easeOut});
	TweenMax.to("#text12", ts, {y:0, delay:.75, ease:Circ.easeOut});
	TweenMax.delayedCall(3, step3);
	
	
}
function step3(){
	TweenMax.to("#text11", ts, {y:-30, ease:Circ.easeOutt});
	TweenMax.to("#text12", ts, {y:-30, ease:Circ.easeOut});
	TweenMax.to("#text21", ts, {y:0, ease:Circ.easeOut});
	TweenMax.to("#text22", ts, {y:0, delay:.25, ease:Circ.easeOut});
	TweenMax.delayedCall(3, step4);
}

function step4(){
	TweenMax.to("#text21", ts, {y:-30, ease:Circ.easeOutt});
	TweenMax.to("#text22", ts, {y:-30, ease:Circ.easeOut});
	TweenMax.to("#pack", 1, {y:25,x:7,scale:1.3, ease:Back.easeOut, delay: .35});
	TweenMax.to("#star", 1, {y:0,scale:.5,transformPerspective: 0, ease:Back.easeOut,delay: .5});
	TweenMax.to("#price", 1, {y:0,scale:0.55, ease:Back.easeOut,delay: .5});
	TweenMax.to("#cta", .8, {scale:1, delay:.5,y:-10,  ease:Linear.easeNone, onComplete:popup});
}

function popup(){
		TweenLite.to("#cta", .3,{scale:1.1,delay:.5, ease:Linear.easeOut, onComplete:popup2 });
		
		}
	function popup2(){
		TweenLite.to("#cta", .3,{scale:1, ease:Linear.easeIn});
		}

startFunction();
