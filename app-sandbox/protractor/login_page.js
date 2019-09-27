var login_page = function () {
    var loginInput = element(by.name('login'));
    var passwordInput = element(by.name('password'));

    this.getLoginPage = function () {
        browser.get('gaya/public/index.html#/login');
    };

    this.setLoginInputText = function (text) {
        loginInput.sendKeys(text);
    };

    this.getLoginInputText = function () {
        loginInput.getText(text);
    };

    this.setPasswordInputText = function (text) {
        passwordInput.sendKeys(text);
    };

    this.getPasswordInputText = function () {
        passwordInput.getText(text);
    };

    this.clickLogin = function () {
        element(by.id('ButtonTheme')).click();
    }
}

module.exports = new login_page();
