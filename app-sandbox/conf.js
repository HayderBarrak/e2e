// An example configuration file.
exports.config = {

    // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
     // seleniumAddress: 'http://192.168.77.184:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },


    // baseUrl: 'http://194.98.57.14/gaya/public/index.html#/login',
    //
    // framework: 'jasmine2',
    // params: {
    //     client: {
    //         //name: 'phcdz.com'
    //         name: 'assist1.phcvip.com'
    //         //name: 'homolog.phcvip.com'
    //     },
    //     qualify: {
    //         count: 3,
    //         wrapup: 3000,
    //         durationCall: {
    //             min: 50000,
    //             max: 120000
    //         }
    //     },
    //     compaigns: {
    //         count: 3
    //     },
    //     user: {
    //         min: 245,
    //         max: 300
    //     },
    //     login: {
    //         wait: 50000000
    //     }
    // },

    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    specs: ['protractor/spec2.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    }
};