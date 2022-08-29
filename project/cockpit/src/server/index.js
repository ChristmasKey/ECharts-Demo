let express = require("express")
let app = express()
//设置跨域
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    next();
})
//引用路由文件
let chartOne = require("./router/one")
let chartTwo = require("./router/two")
let chartThree = require("./router/three")
let chartFour = require("./router/four")
//中间件中使用路由
app.use("/one", chartOne)
app.use("/two", chartTwo)
app.use("/three", chartThree)
app.use("/four", chartFour)
//请求
app.listen(3000)
