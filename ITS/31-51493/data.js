document.title = "2019 Advantium Oven"
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
var NONEBlueArray = [path8101,path1934,path8181,path9143];
var NONEPurpleArray = [];
var NONEVioletArray = [];
var NONEPinkArray = [];
var NONEYellowGreenArray = [];
var NONEYellowArray = [];
var NONEOrangeArray = [path1930,path1950,path8087];
var NONERedArray = [path8029,path320,path7998,path7996,path350,path1862,path8323,path346,path9014,path9052,path8051,path9073,path9132,path9137,path1906,path1922,path9149];
var NONEBrownArray = [];

var compressorBlackArray = [];
var compressorDarkGrayArray = [];
var compressorLightGrayArray = [];
var compressorAquamarineArray = [];
var compressorBlueArray = [path8101,path1934,path8853,path8841,path8181,path9143];
var compressorPurpleArray = [];
var compressorVioletArray = [];
var compressorPinkArray = [];
var compressorYellowGreenArray = [];
var compressorYellowArray = [];
var compressorOrangeArray = [path1930,path1950,path8087];
var compressorRedArray = [path8029,path320,path7998,path7996,path350,path1862,path8323,path346,path9014,path9052,path8051,path9073,path9132,path9137,path1906,path1922,path9149];
var compressorBrownArray = [];

var condenserFanMotorBlackArray = [];
var condenserFanMotorDarkGrayArray = [];
var condenserFanMotorLightGrayArray = [];
var condenserFanMotorAquamarineArray = [];
var condenserFanMotorBlueArray = [path8025,path8279,path8519,path8853,path8841,path8846];
var condenserFanMotorPurpleArray = [];
var condenserFanMotorVioletArray = [];
var condenserFanMotorPinkArray = [];
var condenserFanMotorYellowGreenArray = [];
var condenserFanMotorYellowArray = [];
var condenserFanMotorOrangeArray = [path278,path8191];
var condenserFanMotorRedArray = [path8029,path320,path7998,path7996,path350,path8323,path8294,path346,path8051];
var condenserFanMotorBrownArray = [];

var defrostControlBlackArray = [];
var defrostControlDarkGrayArray = [];
var defrostControlLightGrayArray = [];
var defrostControlAquamarineArray = [];
var defrostControlBlueArray = [path8025,path8356,path8730,path8533,path8519,path8853,path8841,path8846];
var defrostControlPurpleArray = [];
var defrostControlVioletArray = [];
var defrostControlPinkArray = [];
var defrostControlYellowGreenArray = [];
var defrostControlYellowArray = [];
var defrostControlOrangeArray = [path600];
var defrostControlRedArray = [path8029,path7996,path350,path8323,path346];
var defrostControlBrownArray = [];

var defrostHeaterBlackArray = [];
var defrostHeaterDarkGrayArray = [];
var defrostHeaterLightGrayArray = [];
var defrostHeaterAquamarineArray = [];
var defrostHeaterBlueArray = [path8025,path506,path546,path556,path560,path576,path8533,path8519,path8853,path8841,path8846];
var defrostHeaterPurpleArray = [];
var defrostHeaterVioletArray = [];
var defrostHeaterPinkArray = [];
var defrostHeaterYellowGreenArray = [];
var defrostHeaterYellowArray = [];
var defrostHeaterOrangeArray = [path8392];
var defrostHeaterRedArray = [path8029,path320,path7998,path350,path514,path8323,path346,path8365];
var defrostHeaterBrownArray = [];

var defrostThermostatBlackArray = [];
var defrostThermostatDarkGrayArray = [];
var defrostThermostatLightGrayArray = [];
var defrostThermostatAquamarineArray = [];
var defrostThermostatBlueArray = [];
var defrostThermostatPurpleArray = [];
var defrostThermostatVioletArray = [];
var defrostThermostatPinkArray = [];
var defrostThermostatYellowGreenArray = [];
var defrostThermostatYellowArray = [];
var defrostThermostatOrangeArray = [path542,path546,path556];
var defrostThermostatRedArray = [];
var defrostThermostatBrownArray = [];

var evaporatorFanMotorBlackArray = [];
var evaporatorFanMotorDarkGrayArray = [];
var evaporatorFanMotorLightGrayArray = [];
var evaporatorFanMotorAquamarineArray = [];
var evaporatorFanMotorBlueArray = [path8025,path8279,path8519,path8853,path8841,path8846];
var evaporatorFanMotorPurpleArray = [];
var evaporatorFanMotorVioletArray = [];
var evaporatorFanMotorPinkArray = [];
var evaporatorFanMotorYellowGreenArray = [];
var evaporatorFanMotorYellowArray = [];
var evaporatorFanMotorOrangeArray = [path278,path8191];
var evaporatorFanMotorRedArray = [path8029,path320,path7998,path7996,path350,path8323,path8294,path346,path8051];
var evaporatorFanMotorBrownArray = [];

var freshFoodLightBlackArray = [];
var freshFoodLightDarkGrayArray = [];
var freshFoodLightLightGrayArray = [];
var freshFoodLightAquamarineArray = [];
var freshFoodLightBlueArray = [path8025,path8309,path8542,path8730,path8533,path8519,path8853,path8841,path8846];
var freshFoodLightPurpleArray = [];
var freshFoodLightVioletArray = [];
var freshFoodLightPinkArray = [];
var freshFoodLightYellowGreenArray = [];
var freshFoodLightYellowArray = [];
var freshFoodLightOrangeArray = [path8318];
var freshFoodLightRedArray = [path8029,path374,path378,path382,path8323,path8325,path202];
var freshFoodLightBrownArray = [];

var icemakerBlackArray = [];
var icemakerDarkGrayArray = [];
var icemakerLightGrayArray = [];
var icemakerAquamarineArray = [];
var icemakerBlueArray = [path8025,path8542,path486,path8730,path8533,path8519,path8853,path8841,path8846];
var icemakerPurpleArray = [];
var icemakerVioletArray = [];
var icemakerPinkArray = [];
var icemakerYellowGreenArray = [];
var icemakerYellowArray = [];
var icemakerOrangeArray = [path258,path266,path270,path594];
var icemakerRedArray = [path250,path8029,path8323,path8325,path8330];
var icemakerBrownArray = [];

var temperatureControlBlackArray = [];
var temperatureControlDarkGrayArray = [];
var temperatureControlLightGrayArray = [];
var temperatureControlAquamarineArray = [];
var temperatureControlBlueArray = [];
var temperatureControlPurpleArray = [];
var temperatureControlVioletArray = [];
var temperatureControlPinkArray = [];
var temperatureControlYellowGreenArray = [];
var temperatureControlYellowArray = [];
var temperatureControlOrangeArray = [path350,path354,path358,path362];
var temperatureControlRedArray = [];
var temperatureControlBrownArray = [];

var waterValveBlackArray = [];
var waterValveDarkGrayArray = [];
var waterValveLightGrayArray = [];
var waterValveAquamarineArray = [];
var waterValveBlueArray = [path8853,path8903];
var waterValvePurpleArray = [];
var waterValveVioletArray = [];
var waterValvePinkArray = [];
var waterValveYellowGreenArray = [];
var waterValveYellowArray = [];
var waterValveOrangeArray = [path8953];
var waterValveRedArray = [path8029,path580,path8323,path8325,path8330,path8334];
var waterValveBrownArray = [];