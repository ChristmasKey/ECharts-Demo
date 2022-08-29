//存放路由的文件
let express = require("express")
let router = express.Router()
let fourData = require("../mock/four.json")
//设置路由
router.get("/data", function (req, res) {
    res.send({msg: "第四个窗口RB", data: fourData})
})

//暴露路由
module.exports = router
