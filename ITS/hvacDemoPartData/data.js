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
var compYellowArray = [path3920,path3924,path4000,path42844,path52051,path52062];
var compOrangeArray = [COMP_path];
var compRedArray = [];
var compBrownArray = [];

var OFMBlackArray = [path3820,path3844,path3896,path3900,path3904,path3908,path3932,path4022,path10364,path10368,path52163,path51987,path10328];
var OFMDarkGrayArray = [];
var OFMLightGrayArray = [];
var OFMAquamarineArray = [];
var OFMBlueArray = [];
var OFMPurpleArray = [];
var OFMVioletArray = [];
var OFMPinkArray = [];
var OFMYellowGreenArray = [];
var OFMYellowArray = [path3920,path3924,path4000,path42844,path52062,path52157];
var OFMOrangeArray = [path6452,OFM_path];
var OFMRedArray = [];
var OFMBrownArray = [path52160];

