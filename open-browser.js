'use strict';

require('chromedriver');
const webdriver = require('selenium-webdriver');

exports.by = webdriver.By;
exports.until = webdriver.until;
exports.browser = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

function exitHandler() {
    try {
        exports.browser.quit();
    } catch (e) {}
    process.exit();
}

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));