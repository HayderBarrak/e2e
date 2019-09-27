var home_page = function () {
    var numberPhoneInput = element(by.id('phoneNumber'));

    this.getNumberPhoneInput = function () {
        numberPhoneInput.getText();
    };

    this.setNumberPhoneInput = function (text) {
        numberPhoneInput.sendKeys(text);
    };

    this.changeStatusToAvaible = function () {
        browser.sleep(5000);
        element(by.id('headerChangeAgentStatus')).click();
        browser.actions().mouseMove(element(by.id('headerChangeAgentStatusAvailable'))).perform();
        browser.sleep(500);
        element(by.id('headerChangeAgentStatusAvailable')).click();
    }

    this.changeStatusToReleased = function () {
        browser.sleep(5000);
        element(by.id('headerChangeAgentStatus')).click();
        browser.actions().mouseMove(element(by.id('headerChangeAgentStatusReleased'))).perform();
        browser.sleep(500);
        browser.actions().mouseMove(element(by.id('ChangeAgentStatusReleased'))).perform();
        element(by.id('ChangeAgentStatusReleased')).click();
    }

    this.logout = function () {
        element(by.id('headerMenuProfil')).click();
        // browser.sleep(5000);
        browser.wait(EC.visibilityOf(element(by.css('[data-ng-click="logout()"]'))));
        element(by.css('[data-ng-click="logout()"]')).click();
        browser.sleep(500);
        element(by.id('bot1-Msg1')).click();
    }

    this.clickHangUp = function () {
        browser.wait(EC.visibilityOf(element(by.css('[ng-click="hangUp()"]'))));
        element(by.css('[ng-click="hangUp()"]')).click();
    }

    this.clickCall = function () {
        element(by.css('[ng-click="callOutPhone()"]')).click();
    }
}

module.exports = new home_page();
