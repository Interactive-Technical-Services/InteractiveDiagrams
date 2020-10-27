var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("dataDiv").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "bibleDataSet.html", true);
xhttp.send();

var verses = [];
xhttp.onload = function () {
	chapVerse = (bookDD.options[bookDD.selectedIndex].text + [chapterDD.selectedIndex + 1]);
	chapVerse=document.getElementById(chapVerse);
	
	populateChapterDD();
	chapters = dataDiv.getElementsByTagName("div");
	for(i=0; i<chapters.length; i++){
		paragraphs = chapters[i].getElementsByTagName("p");
		spans = chapters[i].getElementsByTagName("span");
		for(p=0; p<paragraphs.length; p++){
			paragraphs[p].id = spans[p].innerHTML;
			paragraphs[p].setAttribute('href',"#");
		}
	}
	verses = dataDiv.getElementsByTagName("p")
	setUpLinks();
};

bookDD.onchange = function(){
	populateChapterDD();
	chapVerse = (bookDD.options[bookDD.selectedIndex].text + [chapterDD.selectedIndex + 1]);
	chapVerse=document.getElementById(chapVerse);
	bibleDiv.innerHTML = chapVerse.innerHTML;
	
};

chapterDD.onchange = function(){
	chapVerse = (bookDD.options[bookDD.selectedIndex].text + [chapterDD.selectedIndex + 1]);
	chapVerse=document.getElementById(chapVerse);
	bibleDiv.innerHTML = chapVerse.innerHTML;
};

function populateChapterDD(){
	length =parseInt(bookDD.options[bookDD.selectedIndex].value);
	chapterDD.options.length = 0;
	for (var i = 0; i < length; i++) {
        var option = document.createElement("OPTION");
        option.innerHTML = i+1;
        chapterDD.options.add(option)
    }          
}

 function showSearchPage(){
	if(searchDiv.style.display == "flex"){
		searchDiv.style.display = "none"
		homePage.style.display = "flex";

	}else{
		searchDiv.style.display = "flex"
		homePage.style.display = "none"
	}
}

function backToHome(){
	searchDiv.style.display="none";
	homePage.style.display="flex";
}

document.getElementById("myInput").addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
    	setUpSearch();
    }
}, false);



var start = "";
var end = "";
var flag = "g";

var searchValue = document.getElementById("myInput").value;
var searchOptions = "";
function setUpSearch(){
	if(document.getElementById('caseSensitive').checked){
		flag = "g";
	}else{
		flag = "gi";
	}
	if(document.getElementById('exactMatch').checked){
		start = "\\b"
		end = "\\b"
	}else{
		start = ""
		end = ""
	}
	mySearchInputFunction()
	
}



function mySearchInputFunction(){
	searchValue = document.getElementById("myInput").value;
	var myStack = "";
	results.innerHTML = "";
	str = "";
	occurences = 0;
	for(i=0; i<verses.length; i++){
		var verseHTML = verses[i].textContent;
		var searchRegex = new RegExp(start+searchValue+end,flag);
		if(verseHTML.match(searchRegex) != null){
			var str = document.getElementById(verses[i].id).textContent;
			var res = str.replace(searchRegex, "<strong>" + str.match(searchRegex)[0] + "</strong>").replace(verses[i].id, "<a href='javascript:showAnchor(" + '"' + verses[i].id + '"' + ");'>" + verses[i].id + "</a>");

			myStack += res + "<br><br>";
  			occurences+= str.match(searchRegex).length;
  		}
	}
	results.innerHTML = '"' + searchValue + '"' + " found " + occurences + " times." + "<br><br>" + myStack;
	if(results.innerHTML === ""){
  		results.innerHTML += searchValue + " not found."
  	}
}

function showAnchor(id){
	console.log(id)
	idSplit = id.split(":")
	book = idSplit[0].split(" ")
	switch(book[0]) {
 		case "Gen":
 		  bookNav = "Genesis"+ book[1];
 		  break;
 		case "Exo":
 		  bookNav = "Exodus"+ book[1];
 		  break;
 		  case "Lev":
 		  bookNav = "Leviticus"+ book[1];
 		  break;
 		  case "Num":
 		  bookNav = "Numbers"+ book[1];
 		  break;
 		  case "Deu":
 		  bookNav = "Deuteronomy"+ book[1];
 		  break;
 		  case "Jos":
 		  bookNav = "Joshua"+ book[1];
 		  break;
 		  case "Jdg":
 		  bookNav = "Judges"+ book[1];
 		  break;
 		  case "Rth":
 		  bookNav = "Ruth"+ book[1];
 		  break;
 		  case "1Sa":
 		  bookNav = "1 Samuel"+ book[1];
 		  break;
 		  case "2Sa":
 		  bookNav = "2 Samuel"+ book[1];
 		  break;
 		  case "1Ki":
 		  bookNav = "1 Kings"+ book[1];
 		  break;
 		  case "2Ki":
 		  bookNav = "2 Kings"+ book[1];
 		  break;
 		  case "1Ch":
 		  bookNav = "1 Chronicles"+ book[1];
 		  break;
 		  case "2Ch":
 		  bookNav = "2 Chronicles"+ book[1];
 		  break;
 		  case "Ezr":
 		  bookNav = "Ezra"+ book[1];
 		  break;
 		  case "Neh":
 		  bookNav = "Nehemiah"+ book[1];
 		  break;
 		  case "Est":
 		  bookNav = "Esther"+ book[1];
 		  break;
 		  case "Job":
 		  bookNav = "Job"+ book[1];
 		  break;
 		  case "Psa":
 		  bookNav = "Psalms"+ book[1];
 		  break;
 		  case "Pro":
 		  bookNav = "Proverbs"+ book[1];
 		  break;
 		  case "Ecc":
 		  bookNav = "Ecclesiastes"+ book[1];
 		  break;
 		  case "Son":
 		  bookNav = "Song of Solomon"+ book[1];
 		  break;
 		  case "Isa":
 		  bookNav = "Isaiah"+ book[1];
 		  break;
 		  case "Jer":
 		  bookNav = "Jeremiah"+ book[1];
 		  break;
 		  case "Lam":
 		  bookNav = "Lamentations"+ book[1];
 		  break;
 		  case "Eze":
 		  bookNav = "Ezekiel"+ book[1];
 		  break;
 		  case "Dan":
 		  bookNav = "Daniel"+ book[1];
 		  break;
 		  case "Hos":
 		  bookNav = "Hosea"+ book[1];
 		  break;
 		  case "Joe":
 		  bookNav = "Joel"+ book[1];
 		  break;
 		  case "Amo":
 		  bookNav = "Amos"+ book[1];
 		  break;
 		  case "Oba":
 		  bookNav = "Obadiah"+ book[1];
 		  break;
 		  case "Jon":
 		  bookNav = "Jonah"+ book[1];
 		  break;
 		  case "Mic":
 		  bookNav = "Micah"+ book[1];
 		  break;
 		  case "Nah":
 		  bookNav = "Nahum"+ book[1];
 		  break;
 		  case "Hab":
 		  bookNav = "Habakkuk"+ book[1];
 		  break;
 		  case "Zep":
 		  bookNav = "Zephaniah"+ book[1];
 		  break;
 		  case "Hag":
 		  bookNav = "Haggai"+ book[1];
 		  break;
 		  case "Zec":
 		  bookNav = "Zechariah"+ book[1];
 		  break;
 		  case "Mal":
 		  bookNav = "Malachi"+ book[1];
 		  break;
 		  case "Mat":
 		  bookNav = "Matthew"+ book[1];
 		  break;
 		  case "Mar":
 		  bookNav = "Mark"+ book[1];
 		  break;
 		  case "Luk":
 		  bookNav = "Luke"+ book[1];
 		  break;
 		  case "Joh":
 		  bookNav = "John"+ book[1];
 		  break;
 		  case "Act":
 		  bookNav = "Acts"+ book[1];
 		  break;
 		  case "Rom":
 		  bookNav = "Romans"+ book[1];
 		  break;
 		  case "1Co":
 		  bookNav = "1 Corinthians"+ book[1];
 		  break;
 		  case "2Co":
 		  bookNav = "2 Corinthians"+ book[1];
 		  break;
 		  case "Gal":
 		  bookNav = "Galatians"+ book[1];
 		  break;
 		  case "Eph":
 		  bookNav = "Ephesians"+ book[1];
 		  break;
 		  case "Php":
 		  bookNav = "Philippians"+ book[1];
 		  break;
 		  case "Col":
 		  bookNav = "Colossians"+ book[1];
 		  break;
 		  case "1Th":
 		  bookNav = "1 Thessalonians"+ book[1];
 		  break;
 		  case "2Th":
 		  bookNav = "2 Thessalonians"+ book[1];
 		  break;
 		  case "1Ti":
 		  bookNav = "1 Timothy"+ book[1];
 		  break;
 		  case "2Ti":
 		  bookNav = "2 Timothy"+ book[1];
 		  break;
 		  case "Tit":
 		  bookNav = "Titus"+ book[1];
 		  break;
 		  case "Phm":
 		  bookNav = "Philemon"+ book[1];
 		  break;
 		  case "Heb":
 		  bookNav = "Hebrews"+ book[1];
 		  break;
 		  case "Jas":
 		  bookNav = "James"+ book[1];
 		  break;
 		  case "1Pe":
 		  bookNav = "1 Peter"+ book[1];
 		  break;
 		  case "2Pe":
 		  bookNav = "2 Peter"+ book[1];
 		  break;
 		  case "1Jn":
 		  bookNav = "1 John"+ book[1];
 		  break;
 		  case "2Jn":
 		  bookNav = "2 John"+ book[1];
 		  break;
 		  case "3Jn":
 		  bookNav = "3 John"+ book[1];
 		  break;
 		  case "Jud":
 		  bookNav = "Jude"+ book[1];
 		  break;
 		  case "Rev":
 		  bookNav = "Revelation"+ book[1];
 		  break;
	}
	searchDiv.style.display="none";
	homePage.style.display="flex";
	bibleDiv.innerHTML = document.getElementById(bookNav).innerHTML;
	document.getElementById(id).scrollIntoView();
}

function prePop(e){
	myInput.value = e.value;
}

myInput.value = prePopDD.value;



// function setUpLinks(){

// 	for(a=0; a<hyperLinks.length; a++){
// 		var searchValue = hyperLinks[a];
// 		var searchRegex = new RegExp(searchValue, "gi");
// 		for(i=0; i<verses.length; i++){
// 			var verseHTML = verses[i].innerHTML;
// 			if(verseHTML.match(searchRegex) != null){
// 				var str = document.getElementById(verses[i].id).outerHTML
				
//   				var stringMatch = str.match(searchRegex);

//   				var res = str.replace(searchRegex, "<a href='Phrases/" + searchValue + ".html' target='_blank'>" + str.match(searchRegex)[0] + "</a>");
//   				console.log(res)
//   				document.getElementById(verses[i].id).innerHTML = res
//   				// verses[i].innerHTML = res;
//   				// console.log(verses[i].innerHTML)
//   			}
//   		}
// 	}
// }



// var str = "This is some HTML text <a href='Phrases/Jesus Christ.html' target='_blank'>programming</a>";
// console.log(str.replace(str.match(/<a(.*?)<\/a>/g), "written by Robert May."))
var hyperLinks = ["third day", "summer fruit", "ten thousand"];

function setUpLinks(){
	for(a=0; a<hyperLinks.length; a++){
		var searchValue = hyperLinks[a];
		for(i=0; i<verses.length; i++){
			var verseHTML = verses[i].innerHTML;
			var searchRegex2 = new RegExp(searchValue,"g");
			if(verseHTML.match(searchRegex2) != null){
				var str = document.getElementById(verses[i].id).outerHTML;
				var newString2 = str.replace(str.match(/<a(.*?)<\/a>/g), verseHTML.match(searchRegex2)[0]);
  				var stringMatch = newString2.match(searchRegex2);
				var res = str.replace(searchRegex2, "<a href='Phrases/" + searchValue + ".html' target='_blank'>" + str.match(searchRegex2)[0] + "</a>");
				verses[i].outerHTML = res;
  			}
		}
	}
	bibleDiv.innerHTML = chapVerse.innerHTML;
	console.log(document.getElementById("Exo 19:11").outerHTML)
}


var lookUpWord = "";
window.addEventListener('mouseup', function(e) {
    var selection;
    if (window.getSelection) {
      selection = window.getSelection();
      lookUpWord = selection
      console.log(selection.toString());
    } else if (document.selection) {
      selection.toString() !== '' && alert('"' + selection.toString() + '" was selected at ' + e.pageX + '/' + e.pageY);
    }
}
)

function wordDefinition(source){
	if(source === "websters"){
		window.open("http://webstersdictionary1828.com/Dictionary/" + lookUpWord + "", "_blank");
	}
	if(source === "etymology"){
		window.open("https://www.etymonline.com/search?q=" + lookUpWord + "", "_blank");
	}
	if(source === "search"){
		lookUpWord = lookUpWord.toString()
		searchDiv.style.display="flex";
		homePage.style.display="none";
		prePopDD.value = source;
		exactMatch.checked = true;
		start = "\\b"
		end = "\\b"
		document.getElementById("myInput").value = lookUpWord;
		mySearchInputFunction();
	}
}
