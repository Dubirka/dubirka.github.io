

/*Turns on and off the valume and switching to red, when clicking on the music icon*/
function soundOnOff(var1){
	if (var1==0) {
		document.getElementById('off').style.display="none";
		document.getElementById('myAudio').volume="0.01";
		document.getElementById('on').style.display='flex';
	}if(var1==1){
		document.getElementById('on').style.display="none";
		document.getElementById('myAudio').volume="0";
		document.getElementById('off').style.display='flex';
	};

};

/*Switches between active links, by highlighting it with tag symbols, when link are clicked*/
function activeLink(var1){
	document.getElementById("link1").classList.remove("active");
	document.getElementById("link2").classList.remove("active");
	document.getElementById("link3").classList.remove("active");
	var1.classList.add("active");
};
