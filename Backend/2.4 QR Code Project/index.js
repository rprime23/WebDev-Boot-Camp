/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// var qr = require('qr-image');

import qr from 'qr-image';
import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {
        name: 'url_user',
        message: "What's the URL",
    },
  ])
  .then((answers) => {
    const user_ans_url = answers.url_user;
    var qr_image = qr.image(user_ans_url);
    qr_image.pipe(fs.createWriteStream('qr_image.png'));
    fs.writeFile("input.txt", user_ans_url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        });
  })
  .catch((error) => {});