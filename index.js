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
        to : "nickdambhare42@gmail.com,vishalnimbarte03@gmail.com",
        subject : "Employee Data Report",
        html: `
        <h1 style="text-align: center; color: #333;">Employee Data Report</h1>
        <table border="0" cellpadding="10" cellspacing="0" style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; background-color: #f9f9f9;">
          <thead style="background-color: #4CAF50; color: white;">
            <tr>
              <th style="padding: 8px; text-align: left;">Employee Name</th>
              <th style="padding: 8px; text-align: left;">Salary</th>
              <th style="padding: 8px; text-align: left;">Joining Date</th>
              <th style="padding: 8px; text-align: left;">Working Technology</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 8px;">John Doe</td>
              <td style="padding: 8px;">$50,000</td>
              <td style="padding: 8px;">2020-01-15</td>
              <td style="padding: 8px;">JavaScript</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 8px;">Jane Smith</td>
              <td style="padding: 8px;">$60,000</td>
              <td style="padding: 8px;">2019-11-10</td>
              <td style="padding: 8px;">Python</td>
            </tr>
            <tr>
              <td style="padding: 8px;">Emily Johnson</td>
              <td style="padding: 8px;">$55,000</td>
              <td style="padding: 8px;">2021-03-22</td>
              <td style="padding: 8px;">Java</td>
            </tr>
          </tbody>
        </table>
  `
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