'use strict';

const {by, until, browser} = require('./open-browser');

browser.get('http://www.google.com/ncr')
    .then(_ => browser.findElement(by.name('q')).sendKeys('webdriver'))
    .then(_ => browser.findElement(by.name('btnG')).click())
    .then(_ => browser.wait(until.titleIs('webdriver - Google Search'), 1000))
    .then(_ => browser.findElement(by.css('.g h3 a')).getText())
    .then(title => console.log(`Title: ${title}`))
    .then(_ => browser.findElement(by.css('.g .s .f')).getText())
    .then(link => console.log(`Link: ${link}`))
    .then(_ => browser.findElement(by.css('.g .s .st')).getText())
    .then(summary => console.log(`Description: ${summary}`))
    .then(_ => browser.quit());