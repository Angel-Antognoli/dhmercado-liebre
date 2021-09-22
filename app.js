/*==========================================================================================
  Javascript:   app.js - Mercado-Liebre

  Summary:      For educational purpose creates a sample JS application.
  Disclaimer:   Mercado-Liebre is a not comertial app.

  Date:         September 21, 2021

  Develop By:   Angel Antognoli

--------------------------------------------------------------------------------------------
  Related Code: home.html
  .             login.html
  .             register.html
  .             pageNotFound.html
  .             styles.css
  .             form.css
  .             pageNotFound.css
  Dependencies: package.json
--------------------------------------------------------------------------------------------
  This code is part of the javascript Code Samples ONLY for Educational purposes.
  Mercado-Liebre is a NOT comertial app for comertial purposes.

  This source code is intended only as a supplement to javascript
  Development Tools and/or on-line documentation.
  See these other materials for detailed information regarding javascript code samples.

  All data and Code in this database is ficticious.
  
  THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, 
  EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED 
  WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.
==========================================================================================*/

// Express Require
const express = require('express');

// Path Requiere
const path = require('path');

// Express Execution
const app = express();

// Statics Resources
app.use(express.static(path.resolve(__dirname, './public')));

// Absolute Path setup to the PUBLIC Folder
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

// Server Start on Port 3000
// Deprecated--app.listen(3000, () => console.log('Server runnning on Port 3000'));

// HEROKU Setup - Changed access port method.
app.listen(process.env.PORT || 3000, function(){
  console.log('Server runnning on Port 3000');
});
/*
    ** RESOURCES ACCESS MAIN PATH **
*/
// Main Root / ➝ Home
app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
})

// Main Root / ➝ Register
app.get('/register', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
})

// Main Root / ➝ Login
app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
})

// Main Root / ➝ Path 404 - PageNotFound
app.get('*', (req, res) => {
	res.status(404).sendFile(path.resolve(__dirname,'./views/pageNotFound.html'));
})