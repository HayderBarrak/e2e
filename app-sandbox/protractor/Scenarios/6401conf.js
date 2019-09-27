var HtmlScreenshotReporter = require("protractor-jasmine2-screenshot-reporter");
var JasmineReporters = require('jasmine-reporters');
var SpecReporter = require('jasmine-spec-reporter/built/main').SpecReporter;
var sync = require('sync');

exports.config = {
    //directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--disable-web-security']
        },
        shardTestFiles: true,
        maxInstances: 3 //nombre users
        //count: 1
    },

    //baseUrl: 'http://194.98.57.14',
//    baseUrl: 'http://192.168.77.186:8081',


    baseUrl: 'http://194.98.57.12',
   // baseUrl: 'http://gaya.g3.192.168.66.160.xip.io',
    //baseUrl: 'http://194.98.57.14',

    framework: 'jasmine2',
    params: {
        client: {
            //name: 'phcdz.com'
            //name: 'assist1.phcvip.com'
            // name: 'homolog.phcvip.com'
        },
        qualify: {
            count: 6,
            wrapup: 3000,
            durationCall: {
                min: 50000,
                max: 120000
            }
        },
        compaigns: {
            count: 3
        },
        user: {
            min: 245,
            max: 300
        },
        login: {
            wait: 50000000 //6
        }
    },

    //Prompter Predictif
    specs: ['../../protractor/prompter1_spec.js'],
    //Mono
    //specs: ['./spec/mono/mono*_spec.js'],

    verboseMultiSessions: true,

    resultJsonOutputFile: '/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor/output.json',
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.manage().timeouts().pageLoadTimeout(40000);
        browser.manage().timeouts().implicitlyWait(100000);
        browser.ignoreSynchronization = true;
        global.EC = protractor.ExpectedConditions;
        jasmine.getEnv().addReporter(new JasmineReporters.JUnitXmlReporter({
            savePath: '/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor',
            consolidateAll: false
        }));
        jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
            dest: "/home/hayder-pc/Documents/workspace/SandBox/app-sandbox/protractor"
        }));
        jasmine.getEnv().addReporter(new SpecReporter({
            // spec: {
            displayStacktrace: true
            // }
        }));
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 18000000,
        includeStackTrace: true
    }
};
