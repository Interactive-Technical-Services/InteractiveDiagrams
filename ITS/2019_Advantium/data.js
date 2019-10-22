
    var arrays = {ovenLampArray:['<a href="images/ovenLamp.pdf" target="_blank" width="100%"><img src="images/ovenLamp.png" width="100%"/></a><center>CLICK IMAGE TO ENLARGE</center><hr><ul><li>Used as a safety to disable entire unit if oven cavity gets too hot.</li><li>Not Resettable</li><li>Normally Closed</li><li>Opens: 293 degrees</li><li>Operating Votage: 120 VAC</li></ul></div>'], ovenTCOArray:['<a href="images/ovenTCO.pdf" target="_blank" width="100%"><img src="images/ovenTCO.png" width="100%"/></a><center>CLICK IMAGE TO ENLARGE</center><hr><ul><li>Used as a safety to disable entire unit if oven cavity gets too hot.</li><li>Not Resettable</li><li>Normally Closed</li><li>Opens: 293 degrees</li><li>Operating Votage: 120 VAC</li></ul>'], magnetronTCOArray:['<a href="images/magnetronTCO.png" target="_blank" width="100%"><img src="images/magnetronTCO.png" width="100%"/></a><ul><li>Used as a safety to disable entire unit if convection fan airflow is interrupted.</li> <li>Not Resettable</li><li>Opens: 320 degrees</li><li>Operating Votage: 120 VAC</li></ul></div>'], convHeaterTCOArray:['<a href="images/convHeaterTCO.pdf" target="_blank" width="100%"><img src="images/convHeaterTCO.png" width="100%"/></a><ul><li>Used as a safety to disable entire unit if magnetron overheats.</li><li>Not Resettable</li><li>Opens: 320 degrees</li><li>Operating Votage: 120 VAC</li></ul>']};

document.title = "2019 Advantium Oven"
xhr = new XMLHttpRequest();
xhr.open("GET","schematic.svg",false);
xhr.overrideMimeType("image/svg+xml");
xhr.send("");
var schematic = document.getElementById("mainWindow").appendChild(xhr.responseXML.documentElement); 

var NONEText = 'Select part from list.';

var ovenLampText = '<a href="images/ovenLamp.pdf" target="_blank" width="100%"><img src="images/ovenLamp.png" width="100%"/></a><center>CLICK IMAGE TO ENLARGE</center><hr><ul><li>Used as a safety to disable entire unit if oven cavity gets too hot.</li><li>Not Resettable</li><li>Normally Closed</li><li>Opens: 293 degrees</li><li>Operating Votage: 120 VAC</li></ul></div>';

var convMotorText = '<a href="images/convMotor.pdf" target="_blank" width="100%"><img src="images/convMotor.png" width="100%"/></a><center>CLICK IMAGE TO ENLARGE</center><hr><ul><li>Used as a safety to disable entire unit if oven cavity gets too hot.</li><li>Not Resettable</li><li>Normally Closed</li><li>Opens:  degrees</li><li>Operating Votage: 120 VAC</li></ul>';


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

var ovenLampBlackArray = [path4394,ovenTCO,heaterTCO,path10442,path10444,path14249,path14247,fuse,path14232,path14236];
var ovenLampDarkGrayArray = [];
var ovenLampLightGrayArray = [];
var ovenLampAquamarineArray = [];
var ovenLampBlueArray = [path3872,path10008,ry2Blade,path10528,path10586,path10734,path10736,path11626,path17156,path14654,path14656];
var ovenLampPurpleArray = [];
var ovenLampVioletArray = [];
var ovenLampPinkArray = [];
var ovenLampYellowGreenArray = [];
var ovenLampYellowArray = [];
var ovenLampOrangeArray = [ovenLamp];
var ovenLampRedArray = [];
var ovenLampBrownArray = [];

var convMotorBlackArray = [];
var convMotorDarkGrayArray = [];
var convMotorLightGrayArray = [];
var convMotorAquamarineArray = [];
var convMotorBlueArray = [path3872,ry5Blade,path6266,path6268,path10008,path10734,path10736,path11700,path11702,path14656,path18201,path18235,path18269];
var convMotorPurpleArray = [];
var convMotorVioletArray = [];
var convMotorPinkArray = [];
var convMotorYellowGreenArray = [];
var convMotorYellowArray = [];
var convMotorOrangeArray = [convectionFanMotor];
var convMotorRedArray = [path4394,magnetronTCO,ovenTCO,PISBlade,path6738,heaterTCO,path10442,path10444,path10480,path10482,path10730,path11688,path11778,fuse,path14232,path14236];
var convMotorBrownArray = [];






 
         


 //      <div id="PISBladeDiv" style="display:none;" >
 //        <center><h3>PRIMARY INTERLOCK SWITCH</h3></center>
 //        <a href="images/primaryInterlockSwitch.png" target="_blank" width="100%"><img src="images/primaryInterlockSwitch.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="MISBladeDiv" style="display:none;" >
 //        <center><h3>MONITOR INTERLOCK SWITCH</h3></center>
 //        <a href="images/monitorSwitch.png" target="_blank" width="100%"><img src="images/monitorSwitch.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="doorSwitchBladeDiv" style="display:none;" >
 //        <center><h3>DOOR SWITCH</h3></center>
 //        <a href="images/doorSwitch.png" target="_blank" width="100%"><img src="images/doorSwitch.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="humiditySensorDiv" style="display:none;" >
 //        <center><h3>HUMIDITY SENSOR</h3></center>
 //        <a href="images/humiditySensor.png" target="_blank" width="100%"><img src="images/humiditySensor.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="damperSwitchDiv" style="display:none;" >
 //        <center><h3>DAMPER SWITCH</h3></center>
 //        <a href="images/damperSwitch.png" target="_blank" width="100%"><img src="images/damperSwitch.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="damperMotorDiv" style="display:none;" >
 //        <center><h3>DAMPER Motor</h3></center>
 //        <a href="images/damperMotor.png" target="_blank" width="100%"><img src="images/damperMotor.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="ovenLampDiv" style="display:none;" >
 //        <center><h3>OVEN LAMP</h3></center>
 //        <a href="images/ovenLamp.png" target="_blank" width="100%"><img src="images/ovenLamp.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="fanMotorDiv" style="display:none;" >
 //        <center><h3>FAN MOTOR</h3></center>
 //        <a href="images/fanMotor.png" target="_blank" width="100%"><img src="images/fanMotor.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="convMotorDiv" style="display:none;" >
 //        <center><h3>CONVECTION MOTOR</h3></center>
 //        <a href="images/convectionFanMotor.pdf" target="_blank" width="100%"><img src="images/convectionFanMotor.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="turntableMotorDiv" style="display:none;" >
 //        <center><h3>TURNTABLE MOTOR</h3></center>
 //        <a href="images/turntableMotor.png" target="_blank" width="100%"><img src="images/turntableMotor.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="lowerHeaterCeramicDiv" style="display:none;" >
 //        <center><h3>LOWER HEATER</h3></center>
 //        <a href="images/lowerHeater.png" target="_blank" width="100%"><img src="images/lowerHeater.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="upperHeater1Div" style="display:none;" >
 //        <center><h3>Upper HEATER 1</h3></center>
 //        <a href="images/upperHeater1.png" target="_blank" width="100%"><img src="images/upperHeater1.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="upperHeater2Div" style="display:none;" >
 //        <center><h3>Upper HEATER 2</h3></center>
 //        <a href="images/upperHeater2.png" target="_blank" width="100%"><img src="images/upperHeater2.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="convectionHeaterDiv" style="display:none;" >
 //        <center><h3>CONVECTION HEATER</h3></center>
 //        <a href="images/convectionHeater.png" target="_blank" width="100%"><img src="images/convectionHeater.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="highVoltageTransformerDiv" style="display:none;" >
 //        <center><h3>HIGH VOLTAGE TRANSFORMER</h3></center>
 //        <a href="images/highVoltageTransformer.png" target="_blank" width="100%"><img src="images/highVoltageTransformer.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="highVoltageCapacitorDiv" style="display:none;" >
 //        <center><h3>HIGH VOLTAGE CAPACITOR</h3></center>
 //        <a href="images/highVoltageCapacitor.png" target="_blank" width="100%"><img src="images/highVoltageCapacitor.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="rectifierDiv" style="display:none;" >
 //        <center><h3>HIGH VOLTAGE DIODE (RECTIFIER)</h3></center>
 //        <a href="images/rectifier.png" target="_blank" width="100%"><img src="images/rectifier.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="magnetronDiv" style="display:none;" >
 //        <center><h3>MAGNETRON</h3></center>
 //        <a href="images/magnetron.png" target="_blank" width="100%"><img src="images/magnetron.png" width="100%"/></a>
 //        <ul>
 //          <li>Used as a safety to disable entire unit if magnetron overheats.</li>
 //          <li>Not Resettable</li>
 //          <li>Opens: 320 degrees</li>
 //          <li>Operating Votage: 120 VAC</li>
 //        </ul> 
 //      </div>

 //      <div id="magnetronRelayDiv" style="display:none;" >
 //        <center><h3>RELAY BOARD BK (Black) CONNECTOR</h3></center>
 //        <a href="images/relayBoard.png" target="_blank" width="100%"><img src="images/relayBoard.png" width="100%"/></a>
 //        <br><br><br><br>
 //        <a href="images/magnetronRelay.png" target="_blank" width="100%"><img src="images/magnetronRelay.png" width="100%"/></a>
 //      </div>

 //  <div id="COMP" style="display:none;">
 //    <center><h3>COMPRESSOR</h3></center>
 //    <img src="compressor.png" width="90%" style="margin:10px">
 //    <center><a href="compressor.pdf">CLICK TO ENLARGE IMAGE</a></center>
 //    <hr>
 //    Component Data
 //    <ul style="margin:0px">
 //      <li>Operating Voltage: 208/230</li>
 //      <li>Resistance: 10 ohms</li>
 //    </ul>
 //    <hr>
 //    <ul>
 //      <li>Conpressor is energized when contactor 11-21 closes.</li>
 //      <li>Contactor is energized when 24VAC is applied to Contactor C1&C2.</li>
 //      <li>HPS, LPS Defrost Board control the Contactor.</li>
 //    </ul>
 //  </div> -->


    
    
    
      
      
      
      
      
     
  