// Define your API URL
// It's important to include '&origin=*' in your API call to prevent any CORS errors

// var api = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&inprop=url&gsrsearch='patriots'";

var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='patriots'";


// Create a request variable and assign a new XMLHttpRequest object to it.
// XMLHttpRequests allow you to retrieve data from a server without
// needing to refresh the page. They're used heavily in Ajax programming.
// Despite the name, it's used for more than just XML
var xhr = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
// Providing 3 arguments (GET/POST, The URL, Async True/False)
xhr.open('GET', url, true);


xhr.setRequestHeader("Origin", "http://en.wikipedia.org");
xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
xhr.setRequestHeader("Accept", "application/json; charset=UTF-8");



// Once request has loaded...
xhr.onload = function() {

    // Parse the request into JSON
    var data = JSON.parse(this.response);

    // Log the data object
    console.log(data);

    // Log the page objects
    console.log(data.query.pages)

    // Loop through the data object
    // Pulling out the titles of each page
    for (var i in data.query.pages) {
        console.log(data.query.pages[i].title);
    }

}

// Send request to the server
xhr.send();
