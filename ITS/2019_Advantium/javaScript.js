TweenMax.to(mainWindow, 0, {x:100, y:-200});

var partsList = [];
var partNameGroupList = partNameGroup.getElementsByTagName("path");
for(i=0; i<partNameGroupList.length; i++){
	partName = partNameGroupList[i].id.split("_")
	partsList.push(partName[0]);
	
	var result = partName[0].replace( /([A-Z])/g, " $1" );
	var finalResult = result.charAt(0).toUpperCase() + result.slice(1);

  	var option = document.createElement("option");
  	option.value = partName[0];
  	option.text = finalResult;
  	componentSelect.add(option);
}

var schematicDrag = Draggable.create(schematic, {zIndexBoost:false});

//Chrome Zoom
mainWindow.addEventListener('mousewheel', chromeMouseWheelEvent);
function chromeMouseWheelEvent(e){
	e.preventDefault();
	switch(e.wheelDelta<0 && scaleUp>1) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .1;
			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .1;
    	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}


//Firfox Zoom
mainWindow.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false);
var scaleUp = 1;
function zoomSchematic(e){
	e.preventDefault();
	switch(e.detail>0 && scaleUp>1) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .1;
			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .1;
    	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}

//Iphone Zoom
schematic.addEventListener('gesturechange', function(e) {
	e.preventDefault();
    if (e.scale < 1.0 && scaleUp > 1) {
        scaleUp = scaleUp - .01;
			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
    } else if (e.scale > 1.0) {
        scaleUp = scaleUp + .01;
    	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
    }
}, false); 


function componentChange(){
	highlightedWidth = 1.5;
	clearHighlights();
	blackArray = document.getElementById("componentSelect").value + "BlackArray";
	darkGrayArray = document.getElementById("componentSelect").value + "DarkGrayArray";
	lightGrayArray = document.getElementById("componentSelect").value + "LightGrayArray";
	aquamarineArray = document.getElementById("componentSelect").value + "AquamarineArray";
	blueArray = document.getElementById("componentSelect").value + "BlueArray";
	purpleArray = document.getElementById("componentSelect").value + "PurpleArray";
	violetArray = document.getElementById("componentSelect").value + "VioletArray";
	pinkArray = document.getElementById("componentSelect").value + "PinkArray";
	yellowGreenArray = document.getElementById("componentSelect").value + "YellowGreenArray";
	yellowArray = document.getElementById("componentSelect").value + "YellowArray";
	orangeArray = document.getElementById("componentSelect").value + "OrangeArray";
	redArray = document.getElementById("componentSelect").value + "RedArray";
	brownArray = document.getElementById("componentSelect").value + "BrownArray";
	textArray = document.getElementById("componentSelect").value + "Text";
	
	TweenMax.to(eval("obj =" + blackArray), .1, {stroke:"rgb(0, 0, 0)", strokeWidth:highlightedWidth});
	TweenMax.to(eval("obj =" + darkGrayArray), .1, {stroke:"rgb(169, 169, 169)", strokeWidth:highlightedWidth});
	TweenMax.to(eval("obj =" + lightGrayArray), .1, {stroke:"rgb(211, 211, 211)", strokeWidth:highlightedWidth});
	TweenMax.to(eval("obj =" + aquamarineArray), .1, {stroke:"rgb(127, 255, 212)", strokeWidth:highlightedWidth});
	TweenMax.to(eval("obj =" + blueArray), .1, {stroke:"rgb(0, 0, 255)", strokeWidth:highlightedWidth});
	TweenMax.to(eval("obj =" + violetArray), .1, {stroke:"rgb(238, 130, 238)", strokeWidth:highlightedWidth});
	TweenMax.to(eval("obj =" + pinkArray), .1, {stroke:"rgb(255, 192, 203)", strokeWidth:highlightedWidth});
	TweenMax.to(eval("obj =" + yellowGreenArray), .1, {stroke:"rgb(154, 205, 50)", strokeWidth:highlightedWidth});
	TweenMax.to(eval("obj =" + yellowArray), .1, {stroke:"rgb(255, 255, 0)", strokeWidth:highlightedWidth});
	TweenMax.to(eval("obj =" + orangeArray), .1, {stroke:"rgb(255, 165, 0)", strokeWidth:highlightedWidth});
	TweenMax.to(eval("obj =" + redArray), .1, {stroke:"rgb(255, 0, 0)", strokeWidth:highlightedWidth});
	TweenMax.to(eval("obj =" + brownArray), .1, {stroke:"rgb(165, 42, 42)", strokeWidth:highlightedWidth});

	partDataWindow.innerHTML = eval("obj =" + textArray);
}


function clearHighlights(){
	diagram1Paths = document.getElementById("diagram1").getElementsByTagName("path");
	partDataWindow.innerHTML = "Select a component from the list."
	for(i=0; i<diagram1Paths.length; i++){
		diagram1Paths[i].style['stroke-linecap']="round";
		diagram1Paths[i].style.stroke = "#000000";
		diagram1Paths[i].style["stroke-width"]= 1;	
	}
}
clearHighlights();