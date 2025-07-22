const http = require("http");

const server = http.createServer((req, res) => {
  //creating a server
  if (req.url === "/") {
    res.write("Welcome to the Home Page , pranav varpe "); //write a response
    res.end(); //end the response , without this the response will not be sent
  }
  if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html"); //set the content type
    res.write("<h1>About Us</h1>"); //write a response
    res.write("<p>This is the about page of our server.</p>");
    res.end(); //end the response
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
