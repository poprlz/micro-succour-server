var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    //res.send('respond with a resource');
    res.render('user/index', {"ngAppName": "userModule"})
});
router.get('/login', function (req, res) {
    //res.send('respond with a resource');
    req.assert('userName', '请输入用户登录名称').notEmpty();
    req.assert('userPassword', '请输入正确的登录密码，密码长度为6-20个字符').len(6, 20);
    var mappedErrors = req.validationErrors(true);
    if (mappedErrors) {
        res.send(mappedErrors)
        return;
    }


});

module.exports = router;
