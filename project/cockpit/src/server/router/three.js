//存放路由的文件
let express = require("express")
let router = express.Router()
let threeData = require("../mock/three.json")
//设置路由
router.get("/data", function (req, res) {
    res.send({msg: "第三个窗口RT", data: threeData})
})

//暴露路由
module.exports = router
