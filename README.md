# githubRePull
Easily get repos from your github profile by using jQuery.

## Getting Started
You'll need to make some quick changes to the source file.

First thing we'll do is change the github_username variable to your profile.

```javascript
/**
 * Change this to your github username
 */
var github_username = 'jordan-johnson';
```
Next you'll update the onComplete function to use the data. Since the JSON request is asynchronous, this function is called when everything is finished.
```javascript
/**
 * Since our request is async, you can use this function 
 * to manage the data after it's received.
 */
onComplete: function() {
  alert(JSON.stringify(rePull.cleanRepos, null, 4));
}
```

And that's pretty much it! I've already provided the basic repo information:

* Name
* Description
* Language
* Repo URL

If you want more repo information, open the URL below (obviously change to your github profile) to see additional options.

```
https://api.github.com/users/<GITHUB_PROFILE>/repos
```
