const http = require("http");
const nodemailer = require("nodemailer");

const server = http.createServer((request, response) => {
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure : true,
        port : 465,
        auth: {
            user: "vn9607420507@gmail.com",
            pass: "dfwcrwxhurevycev"

        }
    });

    const receiver = {
        from : "vn9607420507@gmail.com",
        to : "nickdambhare42@gmail.com",
        subject : "Node Js Mail Testing!",
        text : "Hello this is a text mail!"
    };

    auth.sendMail(receiver, (error, emailResponse) => {
        if(error)
        throw error;
        console.log("success!");
        response.end();
    });
    
});

server.listen(8080,()=>{
    console.log("Server is running on http://localhost:8080")
});