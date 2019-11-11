
xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var schematic = document.getElementById("mainWindow").appendChild(xhr.responseXML.documentElement); 


var NONEText = 'Select part from list.';

 var NONEBlackArray = [];
var NONEDarkGrayArray = [];
var NONELightGrayArray = [];
var NONEAquamarineArray = [];
var NONEBlueArray = [];
var NONEPurpleArray = [];
var NONEVioletArray = [];
var NONEPinkArray = [];
var NONEYellowGreenArray = [];
var NONEYellowArray = [];
var NONEOrangeArray = [];
var NONERedArray = [];
var NONEBrownArray = [];

 var timerMotorBlackArray = [];
var timerMotorDarkGrayArray = [];
var timerMotorLightGrayArray = [];
var timerMotorAquamarineArray = [];
var timerMotorBlueArray = [path184,path208,path306,path1496,path1528];
var timerMotorPurpleArray = [];
var timerMotorVioletArray = [];
var timerMotorPinkArray = [];
var timerMotorYellowGreenArray = [];
var timerMotorYellowArray = [];
var timerMotorOrangeArray = [path1448];
var timerMotorRedArray = [path228,path256,path294,path1427,path1445];
var timerMotorBrownArray = [];

 var pumpBlackArray = [];
var pumpDarkGrayArray = [];
var pumpLightGrayArray = [];
var pumpAquamarineArray = [];
var pumpBlueArray = [path184,path208,path310,path1496,path1528,path1530];
var pumpPurpleArray = [];
var pumpVioletArray = [];
var pumpPinkArray = [];
var pumpYellowGreenArray = [];
var pumpYellowArray = [];
var pumpOrangeArray = [pump];
var pumpRedArray = [path228,path256,path290,path652,path1445,path1556,path1427];
var pumpBrownArray = [];

 var drainSolenoidBlackArray = [];
var drainSolenoidDarkGrayArray = [];
var drainSolenoidLightGrayArray = [];
var drainSolenoidAquamarineArray = [];
var drainSolenoidBlueArray = [path184,path208,path480,path1496,path1528,path1530,path1532,path1534];
var drainSolenoidPurpleArray = [];
var drainSolenoidVioletArray = [];
var drainSolenoidPinkArray = [];
var drainSolenoidYellowGreenArray = [];
var drainSolenoidYellowArray = [];
var drainSolenoidOrangeArray = [drainSolenoid];
var drainSolenoidRedArray = [path228,path256,path452,path460,path652,path1445,path1427,path1993];
var drainSolenoidBrownArray = [];

 var heaterRedArray = [path228,path256,path326,path330,path354,path388,path652,path1445,path1556,path1427,path1997,path1999];
var heaterDarkGrayArray = [];
var heaterLightGrayArray = [];
var heaterAquamarineArray = [];
var heaterBlueArray = [path184,path208,path424,path1496,path1528,path1530,path1532];
var heaterPurpleArray = [];
var heaterVioletArray = [];
var heaterPinkArray = [];
var heaterYellowGreenArray = [];
var heaterYellowArray = [];
var heaterOrangeArray = [path420];
var heaterBlackArray = [];
var heaterBrownArray = [];

 var waterValveBlackArray = [];
var waterValveDarkGrayArray = [];
var waterValveLightGrayArray = [];
var waterValveAquamarineArray = [];
var waterValveBlueArray = [path184,path208,path1946,path1496,path1528,path1530,path1532,path1534,path1536];
var waterValvePurpleArray = [];
var waterValveVioletArray = [];
var waterValvePinkArray = [];
var waterValveYellowGreenArray = [];
var waterValveYellowArray = [];
var waterValveOrangeArray = [waterValve];
var waterValveRedArray = [path228,path256,path452,path1949,path536,path652,path660,path1986,path1445,path1427,path1991];
var waterValveBrownArray = [];