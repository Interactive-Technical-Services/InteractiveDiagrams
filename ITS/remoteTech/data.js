var step0=
"Step 1: "+
"Select FF and FZ temperature range in forms below.<br><br>"+
"<input id='back' type='submit' value='Previous Step' class='select-css' onclick='handleHome()' ontouchstart='handleHome()'>"+
"<br><br><br>Freezer Temperature<br>"+
"<select id='step1A' class='select-css'>"+
"<option value='fzCold'>Less than -15°F</option>"+
"<option value='fzNormal'>(-15°F) - (10°F)</option>"+
"<option value='fzWarm'>More than 10°F</option>"+
"</select>"+
"<br><br>"+
"Fresh Food Temperature"+
"<br>"+
"<select id='step1B' class='select-css'>"+
"<option value='ffCold'>Less than 34°F</option>"+
"<option value='ffNormal'>(35°F) - (43°F)</option>"+
"<option value='ffWarm'>More than 43°F</option>"+
"<option value='ffHot'>Above Room Temperature</option>"+
"</select><br><br>"+
"<input id='mySubmit' type='submit' value='Submit' class='select-css' onclick='handleSubmit()' ontouchstart='handleSubmit()'>"+
"<br><br>"+
"<input id='myHome' type='submit' value='Start Over' class='select-css' onclick='handleHome()' ontouchstart='handleHome()'>";

var step1=
"Step 1: "+
"Select FF and FZ temperature range in forms below."+
"<br><br><br>Freezer Temperature<br>"+
"<select id='step1A' class='select-css'>"+
"<option value='fzCold'>Less than -15°F</option>"+
"<option value='fzNormal'>(-15°F) - (10°F)</option>"+
"<option value='fzWarm'>More than 10°F</option>"+
"</select>"+
"<br><br>"+
"Fresh Food Temperature"+
"<br>"+
"<select id='step1B' class='select-css'>"+
"<option value='ffCold'>Less than 34°F</option>"+
"<option value='ffNormal'>(35°F) - (43°F)</option>"+
"<option value='ffWarm'>More than 43°F</option>"+
"<option value='ffHot'>Above Room Temperature</option>"+
"</select><br><br>"+
"<input id='mySubmit' type='submit' value='Submit' class='select-css' onclick='handleSubmit()' ontouchstart='handleSubmit()'>"+
"<br><br>"+
"<input id='myHome' type='submit' value='Start Over' class='select-css' onclick='handleHome()' ontouchstart='handleHome()'>"

var instructionStart=
"Before Testing:"+
"<ul style='list-style-type: disc'>"+
"<li>Fresh Food and Freezer section should be loaded to at least 75% capacity.</li>"+
"<li>Set temperature control setting to Normal.</li>"+
"<li>Allow unit to run for 24 hours.</li>"+
"</ul>";

var fzColdffCold=
"Replace Cold Control (Thermostat)<br><br>"+
"<img src='coldControlImage.jpg' class='responsive'><br><br>"+
"<img src='coldControlLoc.jpg' class='responsive'>";

var fzColdffNormal=
"Airfow between FF and FZ is restricted.<br><br>"+
"Check:<br><a href='returnDuct.jpg' target=&quot;_blank&quot;>Air supply</a> from freezer to fresh food.<br>"+
"Visually inspect for frost blocking return.<br><br><a href='returnDuct.jpg' target=&quot;_blank&quot;>Return air</a> from fresh food to freezer.";

var fzColdffWarm=
"Check:<br>Air supply from freezer to fresh food.<br>"+
"Return air supply from fresh food to freezer.";

var fzColdffHot=
"Check: Door switch.<br>"+
"Fresh food light is not turning off when door is closed."