"use strict";
// Crie, em TypeScript, uma interface chamada UserProps, que conterá as propriedades firtsName,lastName, username, email, password, cpf, contacto e isAdmin. Após criar a interface, crie uma classe User implementando essa interface. Faça os métodos getter e setter de cada propriedade.
var User = /** @class */ (function () {
    function User(firstName, lastName, userName, email, password, cpf, contacto, isAdmin) {
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (userName === void 0) { userName = ''; }
        if (email === void 0) { email = ''; }
        if (password === void 0) { password = ''; }
        if (cpf === void 0) { cpf = ''; }
        if (isAdmin === void 0) { isAdmin = false; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.cpf = cpf;
        this.contacto = contacto;
        this.isAdmin = isAdmin;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.cpf = cpf;
        this.contacto = contacto;
        this.isAdmin = isAdmin;
    }
    User.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    User.prototype.getLastName = function () {
        return this.firstName;
    };
    User.prototype.setUserName = function (userName) {
        this.userName = userName;
    };
    User.prototype.getUserName = function () {
        return this.userName;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.setCPF = function (cpf) {
        this.cpf = cpf;
    };
    User.prototype.getCPF = function () {
        return this.password;
    };
    User.prototype.setContacto = function (contacto) {
        this.contacto = contacto;
    };
    User.prototype.getContacto = function () {
        return this.contacto;
    };
    User.prototype.setIsAdmin = function (isAdmin) {
        this.isAdmin = isAdmin;
    };
    User.prototype.getIsAdmin = function () {
        return this.isAdmin;
    };
    return User;
}());
var user1 = new User();
user1.setFirstName('Karl');
user1.setLastName('Marx');
user1.setUserName('FuckDasKapital');
user1.setEmail('karlmarx@mail.com');
user1.setPassword('gundrisse');
user1.setCPF('00100200304');
user1.setIsAdmin(true);
console.log(user1);
