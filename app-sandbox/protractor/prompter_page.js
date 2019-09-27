var prompter_page = function () {
    var searchCallBacksInput = element(by.id('searchCallBacks'));
    var searchCallsInput = element(by.id('searchCalls'));
    var recallDateInput = element(by.name('recallDate'));
    var recallHourInput = element(by.css('[ng-model="callBackHour"]'));
    var callBackPhoneInput = element(by.name('callBackPhone'));
    var commentInput = element(by.css('[ng-model="campaignHistory.comment"]'));
    var otherNumberInput = element(by.xpath('//input[@id=\'otherPhone\']'));

    this.setSearchCallBacksInput = function (text) {
        browser.wait(EC.visibilityOf(searchCallBacksInput));
        searchCallBacksInput.clear();
        var array = text.split('');
        for (i = 0; i < array.length; i++) {
            searchCallBacksInput.sendKeys(array[i]);
            browser.sleep(100);
        }
        browser.sleep(4000);
        // searchCallBacksInput.sendKeys(text);
    };

    this.getSearchCallBacksInput = function () {
        searchCallBacksInput.getText();
    };

    this.setCommentInput = function (text) {
        browser.wait(EC.visibilityOf(commentInput));
        commentInput.sendKeys(text);
    };

    this.getCommentInput = function () {
        commentInput.getText();
    };

    this.setCallBackPhoneInput = function (text) {
        browser.wait(EC.visibilityOf(callBackPhoneInput));
        callBackPhoneInput.clear().sendKeys(text);
    };

    this.getCallBackPhoneInput = function () {
        callBackPhoneInput.getText();
    };

    this.setRecallHourInput = function (text) {
        browser.wait(EC.visibilityOf(recallHourInput));
        recallHourInput.clear().sendKeys(text);
    };

    this.getRecallHourInput = function () {
        recallHourInput.getText();
    };

    this.setRecallDateInput = function (text) {
        browser.wait(EC.visibilityOf(recallDateInput));
        recallDateInput.clear().sendKeys(text);
    };

    this.getRecallDateInput = function () {
        recallDateInput.getText();
    };

    this.setOtherNumberInput = function (text) {
        otherNumberInput.clear().sendKeys(text);
    };

    this.getOtherNumberInput = function () {
        otherNumberInput.getText();
    };

    this.selectStatus = function (value) {
        var isSelected = false;
        do {
            browser.wait(EC.visibilityOf(element(by.id('statusRec'))));
            element(by.id('statusRec')).$('[value="' + value + '"]').click();
            var text = element(by.id('statusRec')).element(by.css('option:checked')).getText();
            if (text.length > 0) {
                isSelected = true;
            }
        } while (isSelected);
    };

    this.setSearchCallsInput = function (text) {
        browser.wait(EC.visibilityOf(searchCallsInput));
        searchCallsInput.clear();
        var array = text.split('');
        for (i = 0; i < array.length; i++) {
            searchCallsInput.sendKeys(array[i]);
            browser.sleep(100);
        }
        browser.sleep(4000);
        // searchCallsInput.sendKeys(text);
    };

    this.getSearchCallsInput = function () {
        searchCallsInput.getText();
    };

    this.clickStatsTab = function () {
        element(by.id('myProfileTab')).all(By.tagName('li')).get(0).$('a').click();
    }

    this.clickCallsTab = function () {
        element(by.id('myProfileTab')).all(By.tagName('li')).get(1).$('a').click();
    }

    this.clickCallBacksTab = function () {
        element(by.id('myProfileTab')).all(By.tagName('li')).get(2).$('a').click();
    }

    this.clickExpressTab = function () {
        element(by.id('myProfileTab')).all(By.tagName('li')).get(3).$('a').click();
    }

    this.clickMore = function () {
        element(by.id('showMore')).all(By.tagName('span')).get(1).$('a').click();
    }

    this.clickLess = function () {
        element(by.id('showMore')).all(By.tagName('span')).get(0).$('a').click();
    }

    this.clickEdit = function () {
        browser.wait(EC.visibilityOf(element(by.css('[ng-click="editableOptions.disabled = false"]'))));
        element(by.css('[ng-click="editableOptions.disabled = false"]')).click();
    }

    this.clickWrapup = function () {
        browser.wait(EC.visibilityOf(element(by.css('[ng-click="finishWrapUp()"]'))));
        element(by.css('[ng-click="finishWrapUp()"]')).click();
    }

    this.clickQualify = function () {
        browser.wait(EC.visibilityOf(element(by.css('[ng-click="qualify()"]'))));
        element(by.css('[ng-click="qualify()"]')).click();
    }

    this.clickSettingsJQGrid = function (value) {
        browser.wait(EC.visibilityOf(element(by.cssContainingText('tr', value))));
        element(by.cssContainingText('tr', value)).all(By.tagName('td')).get(7).$('div').click();
    }

    this.clickShowPrompter = function () {
        element(by.id('callSplitButtonMenu')).all(By.tagName('li')).get(0).click();
    }

    this.clickCallOut = function () {
        browser.wait(EC.visibilityOf(element(by.id('callSplitButtonMenu'))));
        element(by.id('callSplitButtonMenu')).all(By.tagName('li')).get(1).click();
    }

    this.clickOther = function () {
        browser.wait(EC.visibilityOf(element(by.xpath('//div[12]/div/div/div[2]/label/span'))));
        element(by.xpath('//div[12]/div/div/div[2]/label/span')).click();
    }

    this.clickOkButton = function () {
        browser.wait(EC.visibilityOf(element(by.xpath('//div[12]/div/div/div[3]/button[1]'))));
        element(by.xpath('//div[12]/div/div/div[3]/button[1]')).click();
    }

    this.clickPhoneLabel = function () {
        browser.wait(EC.visibilityOf(element(by.id('PHONE'))));
        element(by.id('PHONE')).click();
    }

    this.selectStatusSubAction = function (value) {
        element.all(by.css('[ng-repeat="item in items"][class="radio ng-scope"]')).get(value).$('label').$('span').click();
    }

    this.clickOkButtonSubAction = function () {
        element(by.css('[ng-click="ok()"]')).click();
    }

    this.clickCancelButtonSubAction = function () {
        element(by.css('[ng-click="cancel()"]')).click();
    }

    this.clickStartCampaignExpressButton = function (value) {
        element(by.id('jqgrid-table-express-grid')).all(by.tagName('tr')).get(value).all(by.tagName('td')).get(3).element(by.css('.fa.fa-play')).click();
    }

    this.clickStopCampaignExpressButton = function (value) {
        element(by.id('jqgrid-table-express-grid')).all(by.tagName('tr')).get(value).all(by.tagName('td')).get(3).element(by.css('.fa.fa-stop')).click();
    }

    this.checkError = function () {
        element(by.id('divSmallBoxes')).$('div').$('div').isDisplayed().then(function (value) {
            if (value == true) {
                element(by.id("divSmallBoxes")).$("div").click();
            }
            return value;
        });
    }

    this.zap = function (count, wrapup) {
        var step = 0;
        while (step < count) {
            var EC = protractor.ExpectedConditions;
            var el = element(by.id('record-edit-form'));
            browser.wait(EC.visibilityOf(el));
            browser.sleep(8000);
            element(by.css('[ng-click="hangUp()"]')).click();
            if (step < count - 1) {
                browser.sleep(wrapup);
            } else {
                break;
            }
            step += 1;
        }
    }

    this.qualify = function (count, wrapup) {
        var comments = ['Commentaire 1', 'Commentaire 2', 'Commentaire 3', 'Commentaire 4', 'Commentaire 5']
        var step = 0;
        while (step < count) {
            var EC = protractor.ExpectedConditions;
            var el = element(by.id('record-edit-form'));
            browser.wait(EC.visibilityOf(el));
            var randomCallDuration = Math.round(Math.random() * (browser.params.qualify.durationCall.max - browser.params.qualify.durationCall.min) + browser.params.qualify.durationCall.min);
            browser.sleep(randomCallDuration);
            var randomStatus = Math.round(Math.random() * (4 - 0) + 0);
            element(by.id('statusRec')).$('[value="' + randomStatus + '"]').click();
            this.setCommentInput(comments[Math.round(Math.random() * (4 - 0) + 0)]);
            this.clickQualify();
            browser.sleep(1000);
            step += 1;
        }
    }

    this.qualify_predictif = function (count, wrapup) {
        var comments = [' 1', 'Commentaire 2', 'Commentaire 3', 'Commentaire 4', 'Commentaire 5']
        var step = 0;
        while (step < count) {
            browser.wait(EC.visibilityOf(element(by.id('record-edit-form'))));
            var randomCallDuration = Math.round(Math.random() * (browser.params.qualify.durationCall.max - browser.params.qualify.durationCall.min) + browser.params.qualify.durationCall.min);
            browser.sleep(10000);
            console.log("testchanges");
            //var randomStatus = Math.round(Math.random() * (4 - 0) + 0);
            //this.selectStatus(randomStatus);
            //this.setCommentInput('Commentaire');
            element(by.id('statusRec')).$('[value="0"]').click();
            this.clickQualify();
            /*if (this.checkError()) {
                this.clickQualify();
            }*/
            browser.sleep(2000);
            this.clickWrapup();
            step += 1;
        }
    }

/*        this.qualify_preview = function (count, wrapup) {
            var comments = [' 1', 'Commentaire 2', 'Commentaire 3', 'Commentaire 4', 'Commentaire 5']
            var step = 0;
            while (step < count) {
                browser.wait(EC.visibilityOf(element(by.id('record-edit-form'))));

                step += 1;
            }
        }*/
}

module.exports = new prompter_page();
