//存放路由的文件
let express = require("express")
let router = express.Router()
let twoData = require("../mock/two.json")
//设置路由
router.get("/data", function (req, res) {
    res.send({msg: "第二个窗口LB", data: twoData})
})

//暴露路由
module.exports = router
