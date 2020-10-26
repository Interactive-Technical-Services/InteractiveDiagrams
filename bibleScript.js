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
	bibleDiv.innerHTML = chapVerse.innerHTML;
	populateChapterDD();
	chapters = dataDiv.getElementsByTagName("div");
	for(i=0; i<chapters.length; i++){
		paragraphs = chapters[i].getElementsByTagName("p");
		spans = chapters[i].getElementsByTagName("span");
		for(p=0; p<paragraphs.length; p++){
			paragraphs[p].id = spans[p].innerHTML;
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

var hyperLinks = ["third day", "Holy Ghost", "summer fruit", "ten thousand"];

function setUpLinks(){
	for(a=0; a<hyperLinks.length; a++){
		var searchValue = hyperLinks[a];
		var searchRegex = new RegExp(searchValue, "gi");
		for(i=0; i<verses.length; i++){
			var verseHTML = verses[i].innerHTML;
			if(verseHTML.match(searchRegex) != null){
				var str = document.getElementById(verses[i].id).outerHTML
  				var stringMatch = str.match(searchRegex);
  				var res = str.replace(searchRegex, "<a href='Phrases/" + searchValue + ".html' target='_blank'>" + str.match(searchRegex)[0] + "</a>");
  			}
  		}
	}
}

var start = "";
var end = "";
var flag = "g";

var searchValue = document.getElementById("myInput").value;
var searchOptions = "";
function setUpSearch(){
	console.log("fired")
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



// var searchRegex = new RegExp(searchOptions, "gi");
// var searchRegex = new RegExp("\\b"+searchValue+"\\b","g");



function mySearchInputFunction(){
	searchValue = document.getElementById("myInput").value;
	var myStack = "";
	results.innerHTML = "";
	occurences = 0;
	for(i=0; i<verses.length; i++){
		var verseHTML = verses[i].innerHTML;
		// var searchRegex = new RegExp(\bthird day\b, "g");
		var searchRegex = new RegExp(start+searchValue+end,flag);
		if(verseHTML.match(searchRegex) != null){
			var str = document.getElementById(verses[i].id).outerHTML;
			var newString = str.replace(str.match(/<a(.*?)<\/a>/g), verseHTML.match(searchRegex)[0]);
  			var stringMatch = newString.match(searchRegex);
			  var res = newString.replace(searchRegex, "<strong>" + newString.match(searchRegex)[0] + "</strong>");
			  
  			myStack += res;
  			occurences+= newString.match(searchRegex).length;
  		}
	}
	results.innerHTML = '"' + searchValue + '"' + " found " + occurences + " times." + "<br><br>" + myStack;
	if(results.innerHTML === ""){
  		results.innerHTML += searchValue + " not found."
  	}
}

function prePop(e){
	myInput.value = e.value;
	console.log(e.value)
}

myInput.value = prePopDD.value;





// var str = "This is some HTML text <a href='Phrases/Jesus Christ.html' target='_blank'>programming</a>";
// console.log(str.replace(str.match(/<a(.*?)<\/a>/g), "written by Robert May."))
