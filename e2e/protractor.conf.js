// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter} = require('jasmine-spec-reporter');
const jasmineReporters = require('jasmine-reporters');
const JSONReporter = require('./spec-json-reporter');
const HTMLReport = require('protractor-html-reporter-2');
const fs = require('fs-extra');



exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });

    fs.emptyDir('e2e/_report', (err) => { err && console.log(err); });
 
    const jasmineEnv = jasmine.getEnv();

    const xmlReporter = new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './e2e/_report',
      filePrefix: 'e2exmlresults'
    });
  
    const screenshotReporter = {
      specDone: function (result) { 
        if (result.status === 'failed') {
          browser.getCapabilities().then(function (caps) {
            const browserName = caps.get('browserName');
  
            browser.takeScreenshot().then(function (png) {
              const stream = fs.createWriteStream('e2e/_report/' + browserName + '-' + result.fullName + '.png');
              stream.write(new Buffer(png, 'base64'));
              stream.end();
            });
          });
        }
      }
    };

    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: false
      }
    }));
    jasmineEnv.addReporter(xmlReporter);
    jasmineEnv.addReporter(screenshotReporter);
    jasmineEnv.addReporter(new JSONReporter('e2e/result.json'));

  },
  onComplete: function() {
    let browserName, browserVersion, platform;
    const capsPromise = browser.getCapabilities();
  
    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');
  
      const testConfig = {
        reportTitle: 'Protractor Test Report',
        outputPath: './e2e/_report',
        outputFilename: 'ProtractorTestReport',
        screenshotPath: '.',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: platform
      };
      new HTMLReport().from('e2e/_report/e2exmlresults.xml', testConfig);
    });
  }
};
