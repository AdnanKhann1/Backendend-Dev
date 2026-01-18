// HOW TO RENDER HTML PAGE USING NODE JS

// const http= require('http');
// const server=http.createServer((req,res) => {
//     if(req.url==='/home'){
//         res.writeHead(200,{
//             'Content-Type':'text/html'
//         })
//         res.end("<h1> HOME PAGE </h1>");
//     }
//     else if(req.url==='/about'){
//         res.writeHead(200,{
//             'Content-Type':'text/html'
//         })
//         res.end("<h1> ABOUT PAGE </h1>");
//     }
//     res.writeHead(200,{
//         'Content-Type':'text/html'
//     })
//     res.end("<h1> SERVER IS RUNNING </h1>");

// });



// server.listen(3000, () => {
//     console.log("server is running");
// });




//RENDER THE PLAIN TEXT



// const http= require('http');
// const server=http.createServer((req,res) => {
//     res.writeHead(200,{
//         'Content-Type':'plain/text'
//     })
//     res.end("hello");

// });

//rendering Json file

//JS object

let user = {
    username:"Adnan",
    email:"khanadnan1323@gmail.com"
}

// Json object
// let json = {
//     "username":"Adnan",
//     "email":"khanadnan1323@gmail.com"
// }

//JSON.stringify(user) js object => json string
//JSON.parse() json string => json data

const http = require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200.{
        "content-type" : "application/json"
    });
    // res.end(user);
    res.end(JSON.stringify({
       ghj:"dsjsv",user 
    }));
});

server.listen(3000, () => {
    console.log("server is running");
});



