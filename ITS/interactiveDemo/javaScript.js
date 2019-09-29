xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var schematic = document.getElementById("mainWindow").appendChild(xhr.responseXML.documentElement);
schematic.classList.add("center");

var diagram1Paths = document.getElementById("diagram1").getElementsByTagName("path");
var diagram1PathsLength = diagram1Paths.length;
for(i=0; i<diagram1PathsLength; i++){
	var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('stroke','blue');
	path.setAttribute('fill','none');
	path.setAttribute('opacity',0);
	path.setAttribute('id',diagram1Paths[i].id + 'copy');
	path.setAttribute('onclick','wireClicked(this);');
	path.setAttribute('onmouseover','this.style.cursor = "default"; overPath(this);');
	path.setAttribute('onmouseout','notOverPath(this);');
	path.style['stroke-width']=1;
	path.style['stroke-linecap']="round";
	diagram1Paths[i].style['stroke-linecap']="round";
	path.setAttribute("d", diagram1Paths[i].getAttribute("d"));
	diagram1.appendChild(path);
	path.style["stroke-width"]= 3;
	path.setAttribute('touchmove','wireClicked(this);');	
}

function overPath(wire){
	nameSplit = wire.id.split("copy");
	wire.setAttribute("opacity", ".5"); 
}

function notOverPath(wire){
nameSplit = wire.id.split("copy");
	wire.setAttribute("opacity", "0");
}

function wireClicked(wire){
	nameSplit = wire.id.split("copy");
	wire2 = document.getElementById(nameSplit[0]);
	TweenMax.to(wire2,.1,{stroke:red});
	// TweenMax.to(wire2,.1,{stroke:highlightColor});
	selectedPart = wire2.id;
}

var schematicDrag = Draggable.create(schematic, {zIndexBoost:false});

// schematic.addEventListener('mousewheel', function(e){zoomSchematic(e)}, false);
schematic.addEventListener("DOMMouseScroll", function(e){zoomSchematic(e)}, false);


schematic.addEventListener('mousewheel', chromeMouseWheelEvent);



function mouseWheelEvent(e){
	console.log("fired" + e.wheelDelta)
}

function chromeMouseWheelEvent(e){
	console.log(e)
	e.preventDefault();
	switch(e.wheelDelta<0 && scaleUp>1) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .25;
			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .25;
    	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}























schematic.addEventListener('gesturechange', function(e) {
    if (e.scale < 1.0 && scaleUp > 1) {
        scaleUp = scaleUp - .02;
			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
    } else if (e.scale > 1.0) {
        scaleUp = scaleUp + .02;
    	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
    }
}, false);   

var scaleUp = 1;
function zoomSchematic(e){
	console.log(e)
	e.preventDefault();
	switch(e.detail>0 && scaleUp>1) {
		case true:
		if(scaleUp > .5 ){
			scaleUp = scaleUp - .25;
			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
		}
		break;
		case false:
		scaleUp = scaleUp + .25;
    	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
        break;
    }
}



function colorPickerChange(e){
	var rob = document.getElementById("colorPicker").value
console.log(rob)
}
function partWindowStateChange(e){
	display = document.getElementById("partWindowSelect").value;
	document.getElementById("partDataWindow").style.display = display;
	console.log(display)
}


document.getElementById("partDataWindow").style.display = document.getElementById("partWindowSelect").value;
TweenMax.to(schematic, 0, {x:500, y:75, scaleX:1, scaleY:1, transformOrigin: "50% 50%", ease: Power0.easeNone});





























///////////////////////////////////////////////////////
// xhr = new XMLHttpRequest();
// xhr.open("GET","schematic.svg",false);
// xhr.overrideMimeType("image/svg+xml");
// xhr.send("");
// var schematic = document.getElementById("mainWindow").appendChild(xhr.responseXML.documentElement);
// schematic.classList.add("center");

// var diagram1Paths = document.getElementById("diagram1").getElementsByTagName("path");
// var diagram1PathsLength = diagram1Paths.length;
// for(i=0; i<diagram1PathsLength; i++){
// 	var pathCopy = document.createElementNS('http://www.w3.org/2000/svg', 'pathCopy');
// 	pathCopy.setAttribute('stroke','blue');
// 	pathCopy.setAttribute('fill','none');
// 	pathCopy.setAttribute('opacity',0);
// 	pathCopy.setAttribute('id',diagram1Paths[i].id + 'copy');
// 	pathCopy.setAttribute('onclick','wireClicked(this);');
// 	pathCopy.setAttribute('onmouseover','this.style.cursor = "default"; overPath(this);');
// 	pathCopy.setAttribute('onmouseout','notOverPath(this);');
// 	pathCopy.style['stroke-width']=1;
// 	pathCopy.style['stroke-linecap']="round";
// 	diagram1Paths[i].style['stroke-linecap']="round";
// 	pathCopy.setAttribute("d", diagram1Paths[i].getAttribute("d"));
// 	diagram1.appendChild(pathCopy);
// 	pathCopy.style["stroke-width"]= 3;	
// }

// function overPath(wire){
// 	nameSplit = wire.id.split("copy");
// 	wire.setAttribute("opacity", ".5"); 
// }

// function notOverPath(wire){
// nameSplit = wire.id.split("copy");
// 	wire.setAttribute("opacity", "0");
// }

// function wireClicked(wire){
// 	nameSplit = wire.id.split("copy");
// 	wire2 = document.getElementById(nameSplit[0]);
// 	TweenMax.to(wire2,.1,{stroke:highlightColor});
// 	selectedPart = wire2.id;
// }

// var diagram1Drag = Draggable.create(schematic, {zIndexBoost:false});

// TweenMax.to(schematic, 0, {x:600, y:75, scaleX:1, scaleY:1, transformOrigin: "50% 50%", ease: Power0.easeNone});
// zoomSlider.value=schematic._gsTransform.scaleX;
// var scaleUp = schematic._gsTransform.scaleX;
// function zoomSchematic(e){
// 	e.preventDefault();
// 	switch(e.detail>0) {
// 		case true:
// 		if(scaleUp > .5 ){
// 			scaleUp = scaleUp - .25;
// 			TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
// 		}
// 		break;
// 		case false:
// 		scaleUp = scaleUp + .25;
//     	TweenMax.to(schematic, .5, {scaleX:scaleUp, scaleY:scaleUp, transformOrigin: "50% 50%", ease: Power0.easeNone});
//         break;
//     }
//     zoomSlider.value=scaleUp;
// }


// zoomSlider.addEventListener("input", update);
// function update(){
// 	TweenMax.set(schematic, {scaleX:zoomSlider.value, scaleY:zoomSlider.value, transformOrigin: "50% 50%", ease: Power0.easeNone});
// }






////////////////////



