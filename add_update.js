//Add New Data from incoming Hubspot source sheets to Smartsheet Renewals/Mid-Contract Sheets
//Update Data in smartsheet Renewals/Mid-Contract Sheets to be in sync with incoming Hubspot Source sheets.
//Parameters - Renewals FolderID, Mid contracts folder ID, Token

//Initialize the client
var client = require('smartsheet');
var smartsheet = client.createClient({
    accessToken:'SMARTSHEET_ACCESS_TOKEN',
    logLevel:'info'
});

//Get Hubspot Source Sheets
//Parameter : Renewals FolderID