
// Create web server
const express = require('express');
const app = express();

// Create a port
const port = 3000;

// Create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}); 
 To run the server, you can use the following command: 
 node comments.js 
 This command will start the server at  http://localhost:3000 . 
 Now, let’s create a new route to handle comments. 
 app.get('/comments', (req, res) => {
    res.send('This is the comments page!');
}); 
 Now, if you visit  http://localhost:3000/comments , you will see the message “This is the comments page!”. 
 Adding Comments to the Route 
 Let’s add a comment to the route. 
 app.get('/comments', (req, res) => {
    // This is a comment
    res.send('This is the comments page!');
}); 
 In the above code, the comment is added above the  res.send()  method. 
 Now, let’s add a multi-line comment to the route. 
 app.get('/comments', (req, res) => {
    /*
    This is a multi-line comment
    This is a multi-line comment
    This is a multi-line comment
    */
    res.send('This is the comments page!');
}); 
 In the above code, the multi-line comment is added above the  res.send()  method. 
 Conclusion 
 In this tutorial, you learned how to add comments in JavaScript. Comments are ignored by the JavaScript compiler and are used to add information to the code. 
 Save my name, email, and website in this browser for the next time I comment.