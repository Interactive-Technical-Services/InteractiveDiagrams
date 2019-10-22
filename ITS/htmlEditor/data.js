document.title = "2019 Advantium Oven"
xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var schematic = document.getElementById("mainWindow").appendChild(xhr.responseXML.documentElement); 

var NONEText = 'Select part from list.';

var compBlackArray = [path3820,path3844,path3896,path3900,path3904,path3908,path3932,path4022,path51987,path52044];
var compDarkGrayArray = [];
var compLightGrayArray = [];
var compAquamarineArray = [];
var compBlueArray = [path52055];
var compPurpleArray = [];
var compVioletArray = [];
var compPinkArray = [];
var compYellowGreenArray = [path134];
var compYellowArray = [path3920,path3924,path42844,path52051,path52062];
var compOrangeArray = [COMP_path,COMP_path];
var compRedArray = [];
var compBrownArray = [];