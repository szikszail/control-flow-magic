'use strict';

const {by, until, browser} = require('./open-browser');

(async function () {
    browser.get('http://www.google.com/ncr')
    browser.findElement(by.name('q')).sendKeys('webdriver');
    browser.findElement(by.name('btnG')).click();
    browser.wait(until.titleIs('webdriver - Google Search'), 1000);
    browser.wait(until.elementLocated(by.css('.g h3 a')), 1000);

    const title = await browser.findElement(by.css('.g h3 a')).getText();
    console.log(`Title: ${title}`);

    const link = await browser.findElement(by.css('.g .s .f')).getText();
    console.log(`Link: ${link}`);

    console.log(`Description: ${await browser.findElement(by.css('.g .s .st')).getText()}`);

    browser.quit();
})();