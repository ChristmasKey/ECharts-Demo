//存放路由的文件
let express = require("express")
let router = express.Router()
let oneData = require("../mock/one.json")
//设置路由
router.get("/data", function (req, res) {
    res.send({msg: "第一个窗口LT", data: oneData})
})

//暴露路由
module.exports = router
