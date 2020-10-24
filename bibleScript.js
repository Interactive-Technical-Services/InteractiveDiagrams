var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("dataDiv").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "bibleDataSet.html", true);
xhttp.send();

xhttp.onload = function () {
	chapVerse = (bookDD.options[bookDD.selectedIndex].text + [chapterDD.selectedIndex + 1]);
	chapVerse=document.getElementById(chapVerse);
	viewerDiv.innerHTML = chapVerse.innerHTML;
	populateChapterDD();
	document.getElementById("searchButton").onclick = myFunction;
	document.getElementById("robert").onclick = mySearch;
};

bookDD.onchange = function(){
	chapVerse = (bookDD.options[bookDD.selectedIndex].text + [chapterDD.selectedIndex + 1]);
	chapVerse=document.getElementById(chapVerse);
	viewerDiv.innerHTML = chapVerse.innerHTML;
	populateChapterDD();
};

chapterDD.onchange = function(){
	chapVerse = (bookDD.options[bookDD.selectedIndex].text + [chapterDD.selectedIndex + 1]);
	console.log(chapVerse)
	chapVerse=document.getElementById(chapVerse);
	viewerDiv.innerHTML = chapVerse.innerHTML;
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

 function myFunction(){
	if(searchDiv.style.display == "block"){
		searchDiv.style.display = "none"
	}else{
		searchDiv.style.display = "block"
	}
}

// var str = "Visit W3Schools!"; 
// var n = str.search("W3Schools");




function mySearch(){
	var searchValue = document.getElementById("mySearch").value
	var els = document.getElementById("searchDiv").innerHTML;
	console.log(els.indexOf(searchValue))
	if(els.indexOf(searchValue) > -1){
  		console.log("I'm tired of this.")
	}
}





