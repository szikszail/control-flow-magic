'use strict';

const {by, until, browser} = require('./open-browser');

browser.get('http://www.google.com/ncr')
browser.findElement(by.name('q')).sendKeys('webdriver');
browser.findElement(by.name('btnG')).click();
browser.wait(until.titleIs('webdriver - Google Search'), 1000);
browser.wait(until.elementLocated(by.css('.g h3 a')), 1000);
browser.findElement(by.css('.g h3 a')).getText()
    .then(title => console.log(`Title: ${title}`));
browser.findElement(by.css('.g .s .f')).getText()
    .then(link => console.log(`Link: ${link}`));
browser.findElement(by.css('.g .s .st')).getText()
    .then(description => console.log(`Description: ${description}`));
browser.quit();