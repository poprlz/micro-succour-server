/**
 * Created by Rowe.Luo on 2014-09-05.
 */

var userModule = angular.module('userModule', ["ngRoute"])

var routeFun = function ($routeProvider) {
    $routeProvider.when("/login", {
        templateUrl: '/view/user/login.html',
        controller: "LoginController"
    }).when("/register", {
        templateUrl: '/view/user/register.html',
        controller: "RegisterController"
    }).when("/Success", {
        templateUrl: 'page/success.html',
        controller: "SuccessController"
    }).otherwise({
        redirectTo: "/login"
    })
}


userModule.config(['$routeProvider', routeFun])
