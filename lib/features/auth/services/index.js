// IMPORTS FROM PACKAGES
const express = require("express");

// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");

// middleware(phần mềm trung gian)
// CLIENT -> middleewarre -> SERVER -> CLIENT 
//(data khách hàng gửi dữ liệu qua phần mềm trung gian về máy chủ sau đó mấy chủ trả data về người dùng)
app.use(authRouter)

// INIT
const PORT = 3000;
const app = express();

app.listen(PORT, () => {
    console.log(`connected at port ${PORT}`)
}); 