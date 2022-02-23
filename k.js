function jai(){
	document.write("I KNOW IT !")
}
function ho(){
	var x=document.getElementById("box").style;
	x.position="relative";
	// var h=x.top="50px"
	if(x.top!="50px"){
		x.top="50px"

	}
	else if(x.top="50px"){
		x.top="100px"
	}

	


}
//this is the intervale
function inter(){
	alert("I think you click on:- yes heeeee")
}
setInterval(inter,6000)
