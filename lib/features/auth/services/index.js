console.log("Hello, World");
// print('Hello, World);
const express = require("express");
// import 'package:express/express.dart'
const PORT = 3000;

const app = express();

// CREATING AN API
// http: //<youridaddress>/hello-world

// Create a GET Request giving a json response with key of name
// and value of your name
//{
//  'name': 'Phi'  
//}

app.get('/', (req, res) => {
    res.json({name: "Phi"});
});

app.get("/hello-world", (req, res) => {
    res.send('DO NOT ON YOUR OWN.');
});
// GET, PUT, POST, DELETE, UPDATE -> CRUD
app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`)
}); 