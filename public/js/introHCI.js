'use strict';

// Call this function when the page loads (the "ready" event)

/*
 * Function that is called when the document is ready.
 */


	// $('#colorBtn').click(randomizeColors);

/*
 * Make an AJAX call to retrieve project details and add it in
 */


function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	$.get("http://localhost:3000/project/1",callBackFn);

	console.log("User clicked on project " + idNumber);
	$.get("/project/" + idNumber, callback)
}


function callback(result){
	console.log("back success")
	var myhtml = 
	'<img src = " '+result['image']+' "class = "detailsImage">' + 
	'<p>' + result['title'] + '</p>' + 
	'<p>' + result['date'] + '</p>' +
	'<p>' + result['summary'] + '</p>' +
	$("project" + result['id'] + ".details").html(myhtml);
}