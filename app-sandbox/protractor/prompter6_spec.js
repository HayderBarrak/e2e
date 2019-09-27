var fs = require('fs');

beforeEach(function () {});
describe('Login Page', function () {
    var login_page = require('../../../page/login_page');

    it('Should be displayed', function () {
        login_page.getLoginPage();
        login_page.setLoginInputText('selenium36@' + browser.params.client.name);
        login_page.setPasswordInputText('123456');
        login_page.clickLogin();
        browser.sleep(5000);
        expect(browser.getCurrentUrl()).toContain('gaya/public/index.html#/login');
    });

    describe('Prompter', function () {
        var home_page = require('../../../page/home_page');
        var prompter_page = require('../../page/prompter_page');

        it('Change status to avaible', function () {
            home_page.changeStatusToAvaible();
        });

        it('Zap', function () {
            prompter_page.zap(browser.params.qualify.count, browser.params.qualify.wrapup);
        });

        it('Change status to released', function () {
            home_page.changeStatusToReleased();
        });

        it('Logout', function () {
            browser.sleep(5000);
            home_page.logout();
        });
    });
});
