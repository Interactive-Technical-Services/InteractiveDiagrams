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
	document.getElementById("searchButton").onclick = showSearchPage;
	// document.getElementById("robert").onclick = mySearch();
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
	chapVerse = (bookDD.options[bookDD.selectedIndex].text + [chapterDD.selectedIndex + 1]);
	chapVerse=document.getElementById(chapVerse);
	bibleDiv.innerHTML = chapVerse.innerHTML;
	populateChapterDD();
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
 	console.log("fired")
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

// function resolutionChanged(){
// 	var w = window.outerWidth;
//  	var h = window.outerHeight;
//  	if(w < 600){
//  		searchPageH3.classList.add("centered");
//  		homePageH3.classList.add("centered");
//  		console.log('less than')
//  	}else{
//  		searchPageH3.classList.remove("centered");
//  		homePageH3.classList.remove("centered");
//  	}
// 	console.log(w)
// }

document.getElementById("mySearch").addEventListener("keydown", function(e) {
    if (!e) { var e = window.event; }
    // e.preventDefault(); // sometimes useful

    // Enter is pressed
    if (e.keyCode == 13) { mySearch(); }
}, false);




// function mySearch(){
// 	var searchValue = document.getElementById("mySearch").value
// 	var els = document.getElementById("searchDiv").innerHTML;
// 	console.log(els.indexOf(searchValue))
// 	if(els.indexOf(searchValue) > -1){
//   		console.log("I'm tired of this.")
// 	}
// }


function mySearch(){
	var myStack = "";
	results.innerHTML = "";
	var searchValue = document.getElementById("mySearch").value;
	var searchRegex = new RegExp(searchValue, "g");
	occurences = 0;
	searchValueLength = searchValue.split('');
	for(i=0; i<verses.length; i++){
		var verseHTML = verses[i].innerHTML;
		if(verseHTML.match(searchRegex) != null){
			var str = document.getElementById(verses[i].id).outerHTML
  			var stringMatch = str.match(searchRegex);
  			var res = str.replace(searchRegex, "<strong>" + str.match(searchRegex)[0] + "</strong>");
  			myStack += res;
  			occurences+= str.match(searchRegex).length;
  		}
	}
	results.innerHTML = '"' + searchValue + '"' + " found " + occurences + " times." + "<br><br>" + myStack;
	if(results.innerHTML === ""){
  		results.innerHTML += searchValue + " not found."
  	}
}

// function ddSearch(searchValue){
// 	console.log(searchValue)
// 	occurences = 0;
// 	results.innerHTML = "";
// 	// var searchValue = document.getElementById("mySearch").value;
// 	searchValueLength = searchValue.split('');
// 	paragraphs = document.getElementsByTagName('p');
// 	for(i=0; i<paragraphs.length; i++){
// 		var els = paragraphs[i].innerHTML;
// 		console.log(els.indexOf(searchValue))
// 		if(els.indexOf(searchValue) > -1){
// 			occurences++;
// 			var str = document.getElementById(paragraphs[i].id).innerHTML
//   			var res = str.replace(searchValue, "<strong>" + searchValue + "</strong>");

//   			results.innerHTML += res + "<br><br>";

//   			// paragraphs[i].innerHTML = res;
//   		}
// 	}	
// }

function setUpLinks(){
	results.innerHTML = "";
	var searchValue = document.getElementById("mySearch").value;
	var searchRegex = new RegExp(searchValue, "g");
	searchValueLength = searchValue.split('');
	for(i=0; i<verses.length; i++){
		var verseHTML = verses[i].innerHTML;
		if(verseHTML.match(searchRegex) != null){
			var str = document.getElementById(verses[i].id).outerHTML
  			// var res = str.replace(searchRegex, "<a target="_blank" href="Phrases/thirdDay.html">" + searchValue + "</a>");
  		}
	}
}




