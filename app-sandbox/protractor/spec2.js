describe('Protractor Demo App', function() {
    it('should add one and two', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(3000);
        element(by.model('first')).sendKeys(3);
        element(by.model('second')).sendKeys(2);


        element(by.id('gobutton')).click();
        browser.sleep(3000);
        expect(element(by.binding('latest')).getText()).
        toEqual('5'); // This is wrong!
    });
});