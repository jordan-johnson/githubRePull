/**
 * rePull for GitHub
 *
 * Feel free to edit anything you like!
 *
 * @description Pulls list of your repos from GitHub
 * @author 		Jordan Johnson
 * @site		https://github.com/jordan-johnson
 * @version 	1.1
 */

/**
 * Change this to your github username
 */
var github_username = 'jordan-johnson';

var rePull = {
	// all the repo data
	jsonRepos: [],

	// filter for repo data
	cleanRepos: [],

	/**
	 * Since our request is async, you can use this function 
	 * to manage the data after it's received.
	 */
	onComplete: function() {
		alert(JSON.stringify(rePull.cleanRepos, null, 4));
	},

	/**
	 * Separates data from original JSON content
	 */
	createCleanRepos: function() {
		$.each(rePull.jsonRepos, function(index) {
			var repo = rePull.jsonRepos[index];

			var obj = {};

			// add or remove fields as you see fit
			obj.name = repo.name;
			obj.url = repo.html_url;
			obj.desc = repo.description;
			obj.lang = repo.language;

			rePull.cleanRepos.push(obj);
		});
	},

	/**
	 * Request JSON data from address
	 */
	jsonRequest: function(request) {
		$.ajax({
			url: request,
			async: true,
			dataType: 'json',
			success: function(json) {
				rePull.jsonRepos = json;

				rePull.createCleanRepos();
				rePull.onComplete();
			}
		});
	},

	/**
	 * Call this function to start request
	 */
	getRepos: function() {
		var repos = 'https://api.github.com/users/' + github_username + '/repos';

		rePull.jsonRequest(repos);
	}
};