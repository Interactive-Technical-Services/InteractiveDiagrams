var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("dataDiv").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "bibleDataSet.html", true);
xhttp.send();

xhttp.onload = function () {
	chapVerse = (bookDD.options[bookDD.selectedIndex].text + [chapterDD.selectedIndex + 1]);
	chapVerse=document.getElementById(chapVerse);
	viewerDiv.innerHTML = chapVerse.innerHTML;
};


// function changePage(url){
// 	var http = new XMLHttpRequest();
// http.open("GET", url);
// http.onreadystatechange = function(){
//     if(http.readyState == 4 && http.status == 200) {
//         document.getElementById("viewerDiv").innerHTML = http.responseText;
//     }
// }
// http.send(null);
// }
// changePage("Genesis1.html")


// navDD.onchange = function(){
// 	var sel = document.getElementById('navDD');
// 	var sv = sel.options[sel.selectedIndex].value;
// 	if(sv === "Forum"){
// 	window.open("https://robertmayeight.wixsite.com/website");
// 	}
// };

// bookDD.onchange = function(){
// 	var length = chapterDD.options.length;
// 	for (i = length-1; i >= 0; i--) {
//   		chapterDD.options[i] = null;
// 	}
// 	chapterDD.length = bookDD.options[bookDD.selectedIndex].value;
// 	for (i=1; i<=chapterDD.length; i++) {
// 			chapterDD.options[i-1].text = i;
// 	}
// 	changePage(bookDD.options[bookDD.selectedIndex].text + chapterDD.options[chapterDD.selectedIndex].text + ".html")
// };

// chapterDD.onchange = function(){
// 	changePage(bookDD.options[bookDD.selectedIndex].text + chapterDD.options[chapterDD.selectedIndex].text + ".html")
// };




chapterDD.onchange = function(){
	chapVerse = (bookDD.options[bookDD.selectedIndex].text + [chapterDD.selectedIndex + 1]);
	chapVerse=document.getElementById(chapVerse);
	viewerDiv.innerHTML = chapVerse.innerHTML;
};
