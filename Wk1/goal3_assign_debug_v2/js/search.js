/*
Daniel Cobb
11/30/2015
Analyze Buggy search
*/

// Create privatized scope using a self-executing function
(function(){

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), // Set the division to show search results
		searchInput = document.forms[0].search,	// Set the location of the search input
		currentSearch = ''	// Set the current search to nothing
	;

	// Validates search query
	var validqte == function(query){

		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){ //Check if the first charecter of the search is empty
			query = query.substring(1, query.length); // IF it is empty start the search term at the next charecter
		};
		while(query.charAt(query.length-1) === ""){ // Check if the last charecter is empty
			query = query.substring(0, query.length-1); // If the last charecter is empty set the query to length minus one
		;

		// Check search length, must have 3 characters
		if(query.length < 3){ // Check if query length is less than 3 charecters
			alert("Your search query is too small, try again.); // Alert that query is too small if under 3 charecters

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); // Focus on input form for query
			return;
		};

		search(query); // Pass the search query into search function
	};

	// Finds search matches
	var search = function(query)

		// split the user's search query string into an array
		var queryArray = query.join(" "); // Set search query into an array

		// array to store matched results from database.js
		var results = []; // Set up empty result value

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){ // Set loop: i to 0, j to length of database, if i is less than j add one to i

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); // Set the end of the title for each database entry
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd); // Change title to all lowercase letters

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){ // Change query to all lowercase letters
				var qitem = queryArray[ii].tolowercase();	// Save lowercase letters to new var

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);
				if(compare !== -1){
					results.push(db[i]);
				};
			;
		;

		results.sort();

		// Check that matches were found, and run output functions
		if(results.length = 0){
			noMatch();
		}else{
			showMatches(results);
		};
	};

	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};

	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',
			title,
			url
		;

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){

			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};

	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	;

})();
