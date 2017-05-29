'use strict';

const {by, until, browser} = require('./open-browser');

browser.get('http://www.google.com/ncr')
browser.findElement(by.name('q')).sendKeys('webdriver');
browser.findElement(by.name('btnG')).click();
browser.wait(until.titleIs('webdriver - Google Search'), 1000);
console.log(`Title: ${await browser.findElement(by.css('.g h3 a')).getText()}`);
console.log(`Link: ${await browser.findElement(by.css('.g .s .f')).getText()}`);
console.log(`Description: ${await browser.findElement(by.css('.g .s .st')).getText()}`);
browser.quit();