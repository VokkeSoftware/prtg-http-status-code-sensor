'use strict';

const args = require('yargs').argv;
const { https } = require('follow-redirects');

let url = args.url;
let expectedStatusCode = args.expectedStatusCode;

https.get(url, response => {
    let resultStatusCode = response.statusCode;
    if (expectedStatusCode !== resultStatusCode) {
        console.log('2:Expected status code of  '+ expectedStatusCode + ' but got '+ resultStatusCode);
        process.exit(2);
    } else {
        console.log('0:Expected status code was returned');
        process.exit(0);
    }

}).on('error', err => {
    console.error(err);
});
