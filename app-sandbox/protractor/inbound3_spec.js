var fs = require('fs');

beforeEach(function () {});
describe('Login Page', function () {
    var login_page = require('../../../page/login_page');

    it('Login', function () {
        login_page.getLoginPage();
        login_page.setLoginInputText('inbound3@' + browser.params.client.name);
        login_page.setPasswordInputText('123456');
        login_page.clickLogin();
        browser.sleep(5000);
    });

    describe('Prompter', function () {
        var home_page = require('../../../page/home_page');
        var prompter_page = require('../../../page/prompter_page');


        it('Change status to avaible', function () {
            home_page.changeStatusToAvaible();
        });

        it('connect', function () {
            prompter_page.connect_inbound();
        });

        it('prompter ', function () {
            prompter_page.Call_inbound();

        });

        it('Qualify', function () {
            prompter_page.qualify_inbound(browser.params.qualify.count,0);
        });

        it('Change status to released', function () {
            home_page.changeStatusToReleased()
        });

        it('Logout', function () {
            browser.sleep(5000);
            home_page.logout();
        });
    });
});
