// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require('mongoose');
// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");

// INIT
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://ultron:Phi797979@cluster0.0swoeb4.mongodb.net/?retryWrites=true&w=majority";

// middleware(phần mềm trung gian)
// CLIENT -> middleewarre -> SERVER -> CLIENT 
//(data khách hàng gửi dữ liệu qua phần mềm trung gian về máy chủ sau đó mấy chủ trả data về người dùng)
app.use(authRouter);

// Connections
mongoose
    .connect(DB)
    .then(() => {
        console,log("Connection Successful");
    })
    .catch((e) => {
        console.log(`connection at port ${PORT}`);
    });

app.listen(PORT, () => {
    console.log(`connected at port ${PORT}`)
}); 