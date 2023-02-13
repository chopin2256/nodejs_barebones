import * as http from "http"
import * as path from "path"
import * as fs from "fs"
const port = 8080

// Create a server object:
const server = http.createServer(function (req, res) {
    let filePath = ''
    let fileUrl = ''    

    /** Special condition for homepage */
    if (req.url == '/') {
        fileUrl = '/index.html';
        filePath = path.join('./public', fileUrl);
    }

    /** Otherwise, run the request and capture the file type by extension */
    else {
        filePath = path.join('./public', req.url);
    }

    /** Capture the extension so we can load the content type */
    const extname = path.extname(filePath);

    /** Serve the file types */
    let contentType = 'text/html';
    switch (extname) {
        case '.html':
            contentType = 'text/html';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    /** Load the files */
    if (req.method == 'GET') {
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404);
                res.end('File not found');
                return;
            }
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        });
    }
})

// Set up our server so it will listen on the port
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});