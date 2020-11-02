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
	idSplit = id.split(":")
	book = idSplit[0].split(" ")
	chapterDD.selectedIndex = parseInt(book[1]-1);
	switch(book[0]) {
 		case "Gen":
 		  bookNav = "Genesis"+ book[1];
 		  bookDD.selectedIndex  = 0;
 		  break;
 		case "Exo":
 		  bookNav = "Exodus"+ book[1];
 		  bookDD.selectedIndex  = 1;
 		  break;
 		  case "Lev":
 		  bookNav = "Leviticus"+ book[1];
 		  bookDD.selectedIndex  = 2;
 		  break;
 		  case "Num":
 		  bookNav = "Numbers"+ book[1];
 		  bookDD.selectedIndex  = 3;
 		  break;
 		  case "Deu":
 		  bookNav = "Deuteronomy"+ book[1];
 		  bookDD.selectedIndex  = 4;
 		  break;
 		  case "Jos":
 		  bookNav = "Joshua"+ book[1];
 		  bookDD.selectedIndex  = 5;
 		  break;
 		  case "Jdg":
 		  bookNav = "Judges"+ book[1];
 		  bookDD.selectedIndex  = 6;
 		  break;
 		  case "Rth":
 		  bookNav = "Ruth"+ book[1];
 		  bookDD.selectedIndex  = 7;
 		  break;
 		  case "1Sa":
 		  bookNav = "1 Samuel"+ book[1];
 		  bookDD.selectedIndex  = 8;
 		  break;
 		  case "2Sa":
 		  bookNav = "2 Samuel"+ book[1];
 		  bookDD.selectedIndex  = 9;
 		  break;
 		  case "1Ki":
 		  bookNav = "1 Kings"+ book[1];
 		  bookDD.selectedIndex  = 10;
 		  break;
 		  case "2Ki":
 		  bookNav = "2 Kings"+ book[1];
 		  bookDD.selectedIndex  = 11;
 		  break;
 		  case "1Ch":
 		  bookNav = "1 Chronicles"+ book[1];
 		   bookDD.selectedIndex  = 12;
 		  break;
 		  case "2Ch":
 		  bookNav = "2 Chronicles"+ book[1];
 		   bookDD.selectedIndex  = 13;
 		  break;
 		  case "Ezr":
 		  bookNav = "Ezra"+ book[1];
 		   bookDD.selectedIndex  = 14;
 		  break;
 		  case "Neh":
 		  bookNav = "Nehemiah"+ book[1];
 		   bookDD.selectedIndex  = 15;
 		  break;
 		  case "Est":
 		  bookNav = "Esther"+ book[1];
 		   bookDD.selectedIndex  = 16;
 		  break;
 		  case "Job":
 		  bookNav = "Job"+ book[1];
 		   bookDD.selectedIndex  = 17;
 		  break;
 		  case "Psa":
 		  bookNav = "Psalms"+ book[1];
 		   bookDD.selectedIndex  = 18;
 		  break;
 		  case "Pro":
 		  bookNav = "Proverbs"+ book[1];
 		   bookDD.selectedIndex  = 19;
 		  break;
 		  case "Ecc":
 		  bookNav = "Ecclesiastes"+ book[1];
 		   bookDD.selectedIndex  = 20;
 		  break;
 		  case "Son":
 		  bookNav = "Song of Solomon"+ book[1];
 		  bookDD.selectedIndex  = 21;
 		  break;
 		  case "Isa":
 		  bookNav = "Isaiah"+ book[1];
 		  bookDD.selectedIndex  = 22;
 		  break;
 		  case "Jer":
 		  bookNav = "Jeremiah"+ book[1];
 		  bookDD.selectedIndex  = 23;
 		  break;
 		  case "Lam":
 		  bookNav = "Lamentations"+ book[1];
 		  bookDD.selectedIndex  = 24;
 		  break;
 		  case "Eze":
 		  bookNav = "Ezekiel"+ book[1];
 		  bookDD.selectedIndex  = 25;
 		  break;
 		  case "Dan":
 		  bookNav = "Daniel"+ book[1];
 		  bookDD.selectedIndex  = 26;
 		  break;
 		  case "Hos":
 		  bookNav = "Hosea"+ book[1];
 		  bookDD.selectedIndex  = 27;
 		  break;
 		  case "Joe":
 		  bookNav = "Joel"+ book[1];
 		  bookDD.selectedIndex  = 28;
 		  break;
 		  case "Amo":
 		  bookNav = "Amos"+ book[1];
 		  bookDD.selectedIndex  = 29;
 		  break;
 		  case "Oba":
 		  bookNav = "Obadiah"+ book[1];
 		  bookDD.selectedIndex  = 30;
 		  break;
 		  case "Jon":
 		  bookNav = "Jonah"+ book[1];
 		  bookDD.selectedIndex  = 31;
 		  break;
 		  case "Mic":
 		  bookNav = "Micah"+ book[1];
 		  bookDD.selectedIndex  = 32;
 		  break;
 		  case "Nah":
 		  bookNav = "Nahum"+ book[1];
 		  bookDD.selectedIndex  = 33;
 		  break;
 		  case "Hab":
 		  bookNav = "Habakkuk"+ book[1];
 		  bookDD.selectedIndex  = 34;
 		  break;
 		  case "Zep":
 		  bookNav = "Zephaniah"+ book[1];
 		  bookDD.selectedIndex  = 35;
 		  break;
 		  case "Hag":
 		  bookNav = "Haggai"+ book[1];
 		  bookDD.selectedIndex  = 36;
 		  break;
 		  case "Zec":
 		  bookNav = "Zechariah"+ book[1];
 		  bookDD.selectedIndex  = 37;
 		  break;
 		  case "Mal":
 		  bookNav = "Malachi"+ book[1];
 		  bookDD.selectedIndex  = 38;
 		  break;
 		  case "Mat":
 		  bookNav = "Matthew"+ book[1];
 		  bookDD.selectedIndex  = 39;
 		  break;
 		  case "Mar":
 		  bookNav = "Mark"+ book[1];
 		  bookDD.selectedIndex  = 40;
 		  break;
 		  case "Luk":
 		  bookNav = "Luke"+ book[1];
 		  bookDD.selectedIndex  = 41;
 		  break;
 		  case "Joh":
 		  bookNav = "John"+ book[1];
 		  bookDD.selectedIndex  = 42;
 		  break;
 		  case "Act":
 		  bookNav = "Acts"+ book[1];
 		  bookDD.selectedIndex  = 43;
 		  break;
 		  case "Rom":
 		  bookNav = "Romans"+ book[1];
 		  bookDD.selectedIndex  = 44;
 		  break;
 		  case "1Co":
 		  bookNav = "1 Corinthians"+ book[1];
 		  bookDD.selectedIndex  = 45;
 		  break;
 		  case "2Co":
 		  bookNav = "2 Corinthians"+ book[1];
 		  bookDD.selectedIndex  = 46;
 		  break;
 		  case "Gal":
 		  bookNav = "Galatians"+ book[1];
 		  bookDD.selectedIndex  = 47;
 		  break;
 		  case "Eph":
 		  bookNav = "Ephesians"+ book[1];
 		  bookDD.selectedIndex  = 48;
 		  break;
 		  case "Php":
 		  bookNav = "Philippians"+ book[1];
 		  bookDD.selectedIndex  = 49;
 		  break;
 		  case "Col":
 		  bookNav = "Colossians"+ book[1];
 		  bookDD.selectedIndex  = 50;
 		  break;
 		  case "1Th":
 		  bookNav = "1 Thessalonians"+ book[1];
 		  bookDD.selectedIndex  = 51;
 		  break;
 		  case "2Th":
 		  bookNav = "2 Thessalonians"+ book[1];
 		  bookDD.selectedIndex  = 52;
 		  break;
 		  case "1Ti":
 		  bookNav = "1 Timothy"+ book[1];
 		  bookDD.selectedIndex  = 53;
 		  break;
 		  case "2Ti":
 		  bookNav = "2 Timothy"+ book[1];
 		  bookDD.selectedIndex  = 54;
 		  break;
 		  case "Tit":
 		  bookNav = "Titus"+ book[1];
 		  bookDD.selectedIndex  = 55;
 		  break;
 		  case "Phm":
 		  bookNav = "Philemon"+ book[1];
 		  bookDD.selectedIndex  = 56;
 		  break;
 		  case "Heb":
 		  bookNav = "Hebrews"+ book[1];
 		  bookDD.selectedIndex  = 57;
 		  break;
 		  case "Jas":
 		  bookNav = "James"+ book[1];
 		  bookDD.selectedIndex  = 58;
 		  break;
 		  case "1Pe":
 		  bookNav = "1 Peter"+ book[1];
 		  bookDD.selectedIndex  = 59;
 		  break;
 		  case "2Pe":
 		  bookNav = "2 Peter"+ book[1];
 		  bookDD.selectedIndex  = 60;
 		  break;
 		  case "1Jn":
 		  bookNav = "1 John"+ book[1];
 		  bookDD.selectedIndex  = 61;
 		  break;
 		  case "2Jn":
 		  bookNav = "2 John"+ book[1];
 		  bookDD.selectedIndex  = 62;
 		  break;
 		  case "3Jn":
 		  bookNav = "3 John"+ book[1];
 		  bookDD.selectedIndex  = 63;
 		  break;
 		  case "Jud":
 		  bookNav = "Jude"+ book[1];
 		  bookDD.selectedIndex  = 64;
 		  break;
 		  case "Rev":
 		  bookNav = "Revelation"+ book[1];
 		  bookDD.selectedIndex  = 65;
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
}

function textLinkClicked(){

}


var lookUpWord = "";
window.addEventListener("touchend", function(e) {
   	selection = window.getSelection().toString();
    lookUpWord = selection; 
    if(selection === ""){
    	TweenMax.to(hiddenMenu,.5, {x:-250})
    }else{
    	TweenMax.to(hiddenMenu,.5, {x:250})
   		 }
	}
)
var selection;
// window.addEventListener('mouseup', function(e) {
	
     
//     if(selection === ""){
//     	TweenMax.to(hiddenMenu,.5, {x:-250})
//     	selection = window.getSelection().toString();
//     	lookUpWord = selection;
//     }else{
//     	TweenMax.to(hiddenMenu,.5, {x:250})
//    		 }
// 	}
// )

function wordDefinition(source){
	lookUpWord = lookUpWord.toString()
	TweenMax.to(hiddenMenu,.5, {x:-250})
	if(source === "websters"){
		window.open("http://webstersdictionary1828.com/Dictionary/" + lookUpWord + "", "_blank");
	}
	if(source === "etymology"){
		window.open("https://www.etymonline.com/search?q=" + lookUpWord + "", "_blank");
	}
	if(source === "google"){
		window.open("https://www.google.com/search?sxsrf=ALeKk03jVPw_AZYKhqAK-w7Uv2mg97IOeQ%3A1604239940473&source=hp&ei=RMKeX9a7Gpm7tQbzzJCYBA&q=" + lookUpWord + "", "_blank");
		// https://www.google.com/search?sxsrf=ALeKk03jVPw_AZYKhqAK-w7Uv2mg97IOeQ%3A1604239940473&source=hp&ei=RMKeX9a7Gpm7tQbzzJCYBA&q=Jesus
	}
	if(source === "forum"){
		window.open("https://robertmayeight.wixsite.com/website", "_blank");
	}
	if(source === "blueletterbible"){
		window.open("https://www.blueletterbible.org/search/search.cfm?Criteria=" + lookUpWord + "&t=KJV&ss=1#s=s_primary_0_1", "_blank");
	}
	if(source === "biblegateway"){
		window.open("https://www.biblegateway.com/quicksearch/?quicksearch=" + lookUpWord + "&version=KJV", "_blank");
	}
	if(source === "gnv"){
		lookUpWordSplit = lookUpWord.split(" ");
		bookSearch = lookUpWordSplit[0];
		chapVerseSplit = lookUpWordSplit[1].split(":")
		chapterSearch = chapVerseSplit[0];
		verseSearch = chapVerse[1];

		console.log(verseSearch)
		window.open("https://www.biblegateway.com/passage/?search" + bookSearch + "%3A" + verseSearch +   "&version=KJV;GNV", "_blank");
			// https://www.biblegateway.com/quicksearch/?quicksearch=Jesus&version=GNV
	// https://www.biblegateway.com/passage/?search=Genesis%201%3A1-3&version=KJV;NIV
	// https://www.biblegateway.com/passage/?search=Genesis+1%3A12&version=KJV;GNV
	// https://www.biblegateway.com/passage/?searchGen%201:12&version=KJV;GNV
	}
	if(source === "search" && lookUpWord != ""){
		
		searchDiv.style.display="flex";
		homePage.style.display="none";
		prePopDD.value = source;
		exactMatch.checked = true;
		start = "\\b"
		end = "\\b"
		document.getElementById("myInput").value = lookUpWord;
		mySearchInputFunction();
	}else{
		if(source === "search" && lookUpWord === ""){
			searchDiv.style.display="flex";
			homePage.style.display="none";
		}
		
	}
}

////Next Navigation
function goBack(){
	if(chapterDD.selectedIndex > -1){
		chapterDD.selectedIndex--
	}
	if(chapterDD.selectedIndex === -1 && bookDD.selectedIndex > 0){
		bookDD.selectedIndex--
		length =parseInt(bookDD.options[bookDD.selectedIndex].value);
		chapterDD.options.length = 0;
		for (var i = 0; i < length; i++) {
			console.log('fired')
    	    var option = document.createElement("OPTION");
    	    option.innerHTML = i+1;
    	    chapterDD.options.add(option)
    	} 
		console.log(bookDD.value)
		chapterDD.selectedIndex = bookDD.value -1
	}
	chapVerse = (bookDD.options[bookDD.selectedIndex].text + [chapterDD.selectedIndex + 1]);
	chapVerse=document.getElementById(chapVerse);
	bibleDiv.getElementsByTagName('p')[0].scrollIntoView();
	bibleDiv.innerHTML = chapVerse.innerHTML;
}

function goForward(){
	if(chapterDD.selectedIndex < chapterDD.length-1){
		chapterDD.selectedIndex++
	}else{
		if(chapterDD.selectedIndex === chapterDD.length-1 && bookDD.selectedIndex < bookDD.length){
		bookDD.selectedIndex++
		chapterDD.selectedIndex = 0
		length =parseInt(bookDD.options[bookDD.selectedIndex].value);
		chapterDD.options.length = 0;
		for (var i = 0; i < length; i++) {
			console.log('fired')
    	    var option = document.createElement("OPTION");
    	    option.innerHTML = i+1;
    	    chapterDD.options.add(option)
    	} 
	}
}
	
	chapVerse = (bookDD.options[bookDD.selectedIndex].text + [chapterDD.selectedIndex + 1]);
	chapVerse=document.getElementById(chapVerse);
	bibleDiv.getElementsByTagName('p')[0].scrollIntoView();
	bibleDiv.innerHTML = chapVerse.innerHTML;
}


TweenMax.set(hiddenMenu, {x:-250})
function showMenu(){
	selection = window.getSelection().toString();
    	lookUpWord = selection;
	hiddenMenu.style.top = mainMenu.clientHeight + "px"
	if(hiddenMenu._gsTransform.x <= 0){
		TweenMax.to(hiddenMenu,.5, {x:250})
	}else{
		TweenMax.to(hiddenMenu, 1, {x:0})
	}
	
}

