# TwitterStream
Test Angular Project for Job interview (AnyMind). It displays two lists of twitter feeds with a search option to filter them.

## Project Description
This Angular application was developed in Angular v7.3.9 using Angular Material Design components.
When executed it will retrieve a list of JSON twitter APIs based on Heroku from the TwitterScrapte project (https://github.com/artenepo/twitter_scrape) by @artenepo.

There are two screens to this app that are setup as tabs. The first one is to list tweets based on a hashtag. The second screen is to list tweets by user.
Functionality has been built so that users can type into the search field and query the API to filter update the results based on the Twitter hashtag and username.

### Project APIs
#### Get tweets by hashtag

The following API endpoint is called to retrieve the JSON feed and be read into the application:

`https://am-twitter-scrape.herokuapp.com/hashtags/{hashtag}?pages_limit=3&wait=0`

The `{hashtag}` variable is set to be 'Python' by default on initialization but then will be updated by the user via the search input field.

#### Get tweets by User

The following API endpoint is called to retrieve the JSON feed and be read into the application:

`http://am-twitter-scrape.herokuapp.com/users/{username}?pages_limit=3&wait=0`

The `{username}` variable is set to be 'Twitter' by default on initialization but then will be updated by the user via the search input field.

### Cross-Origin Resource Sharing (CORS) issue
Please use this Chrome add-on to allow CORS while using this application. https://waa.ai/aCw4

### Developer notes
It appears as though the date property being retrieved on the API callback from @artenpo twitter_scrape utility not returns a string and not a date object as specified in the documentation.
A custom function was required to trim and split the string value.
