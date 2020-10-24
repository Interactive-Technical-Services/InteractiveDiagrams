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
	bibleDiv.innerHTML = chapVerse.innerHTML;
	populateChapterDD();
	document.getElementById("searchButton").onclick = myFunction;
	document.getElementById("robert").onclick = mySearch;
	chapters = dataDiv.getElementsByTagName("div");
	for(i=0; i<chapters.length; i++){
		paragraphs = chapters[i].getElementsByTagName("p");
		spans = chapters[i].getElementsByTagName("span");
		for(p=0; p<paragraphs.length; p++){
			paragraphs[p].id = spans[p].innerHTML;
		}
	}
};

bookDD.onchange = function(){
	chapVerse = (bookDD.options[bookDD.selectedIndex].text + [chapterDD.selectedIndex + 1]);
	chapVerse=document.getElementById(chapVerse);
	bibleDiv.innerHTML = chapVerse.innerHTML;
	populateChapterDD();
};

chapterDD.onchange = function(){
	chapVerse = (bookDD.options[bookDD.selectedIndex].text + [chapterDD.selectedIndex + 1]);
	console.log(chapVerse)
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

 function myFunction(){
	if(searchDiv.style.display == "block"){
		searchDiv.style.display = "none"
	}else{
		searchDiv.style.display = "block"
	}
}

// var str = "Visit W3Schools!"; 
// var n = str.search("W3Schools");




// function mySearch(){
// 	var searchValue = document.getElementById("mySearch").value
// 	var els = document.getElementById("searchDiv").innerHTML;
// 	console.log(els.indexOf(searchValue))
// 	if(els.indexOf(searchValue) > -1){
//   		console.log("I'm tired of this.")
// 	}
// }


function mySearch(){
	occurences = 0;
	results.innerHTML = "";
	var searchValue = document.getElementById("mySearch").value;
	paragraphs = document.getElementsByTagName('p');
	console.log(paragraphs)
	for(i=0; i<paragraphs.length; i++){

		var els = paragraphs[i].innerHTML;
		if(els.indexOf(searchValue) > -1){
			occurences++;
			
			try{
  			results.innerHTML += document.getElementById(paragraphs[i].id).innerHTML + "<br><br>";
  		}catch(e){console.log("Error number: " + i)}
		}
	}	
}

41
