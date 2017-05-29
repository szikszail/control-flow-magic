'use strict';

require('chromedriver');
const webdriver = require('selenium-webdriver');

exports.by = webdriver.By;
exports.until = webdriver.until;
exports.browser = new webdriver.Builder()
    .forBrowser('chrome')
    .build();