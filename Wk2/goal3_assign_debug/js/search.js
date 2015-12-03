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
	var validqte = function(query){

		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){ //Check if the first character of the search is empty
			query = query.substring(1, query.length); // IF it is empty start the search term at the next character
		};
		while(query.charAt(query.length-1) === ""){ // Check if the last character is empty
			query = query.substring(0, query.length-1); // If the last character is empty set the query to length minus one
		};

		// Check search length, must have 3 characters
		if(query.length < 3){ // Check if query length is less than 3 characters
			alert("Your search query is too small, try again."); // Alert that query is too small if under 3 characters

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); // Focus on input form for query
			return;
		};

		search(query); // Pass the search query into search function
	};

	// Finds search matches
	var search = function(query){

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
				var qitem = queryArray[ii].tolowercase();	// Save lowercase query to new var

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); // Search for match in database from query
				if(compare !== -1){
					results.push(db[i]); // If match does not equal -1 add database index to results
				};
			};
		};

		results.sort(); //Sort all of the results from query and database match

		// Check that matches were found, and run output functions
		if(results.length = 0){ //Check to see if there are results from query
			noMatch(); // if no results show no match
		}else{ // If there are results show the matches
			showMatches(results); // Send results to function to show matches
		};
	};

	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){ // Set no match message to variable
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html; // Display no match message in results division
	};

	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){ // Set function to display query matches

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', // Results variable for showing results
			title,
			url
		;

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){ // Define loop for results

			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|'); //Define the end of the title
			title = results[i].subString(0, titleEnd); // Define the entire title from 0 to end of title

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); // Get url of result from end of title to end of string

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; // Define video link
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT. // Display result in result division
	};

	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){ // Set event for query submit
		var query = searchInput.value; //Set query to the value of search bar
		validqte(query); // send the search to be validated

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	};
})
