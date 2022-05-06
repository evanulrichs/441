var http = require('http');
var fs = require('fs');
var url = require('url');
const parse = require('node-html-parser').parse;
var info = "";

// Create a server
http.createServer(function(request, response) {
    // Parse the request containing file name
    var pathname = url.parse(request.url).pathname;
    // Parse the queryString
    const queryObject = url.parse(request.url, true).query;

    // Print the name of the file for which request is made.
    console.log("Request for " + pathname + " received.");

    // check to see if we are on the second page or not
    if (pathname == "/index2.html") {
        readQueryString(queryObject);
    }
    // Read the requested file content from file system
    fs.readFile(pathname.substr(1), function(err, data) {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, {
                'Content-Type': 'text/html'
            });
        } else {
            //Page found	  
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            // Write the content of the file to response body
            response.write(data.toString());
        }

        // Send the response body 
        response.end();
    });
}).listen(8081);
console.log("Listening on Port 8081");

// this function grabs all the data from the queryString
function readQueryString(queryObject) {

    // access all the queryString variables
    if (queryObject != null) {
        let fColor = queryObject.favColor;
        let fNumber = queryObject.favNumber;

        if (fColor != undefined && fNumber != undefined) {
            //info = fColor + " " + fNumber;
            // change the file
            updateFile(fColor, fNumber);
        }
    }
}

// this function updates the html file
function updateFile(fColor, fNumber) {
    // open the html file
    fs.readFile('index2.html', 'utf8', (err, html) => {
        if (err) {
            throw err;
        }

        // read through the DOM to change it
        let root = parse(html);
        // find the span tag in the file
        let myh1 = root.querySelector('h1');
        let myStyle = root.querySelector('style');

        // change the content of 
        myh1.set_content(fNumber);
        myStyle.set_content('h1 {color: ' + fColor + ';}');

        // create the stream
        var writerStream = fs.createWriteStream("index2.html");
        // Write the data to stream with encoding to be utf8
        writerStream.write(root.toString(), 'UTF8');
        // Mark the end of file
        writerStream.end();
        // Handle stream events --> finish, and error
        writerStream.on('finish', function() {
            console.log("Write completed.");
        });

        writerStream.on('error', function(err) {
            console.log(err.stack);
        });
    });
}