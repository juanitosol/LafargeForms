const express = require('express')
const { google } = require('googleapis');
const app = express();

const path = require('path');

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

app.get("/crazy", async (req, res) => {



  res.send(getRows);
});


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../lafargeforms/views', 'primaryCheklist.html'))
});

app.post("/submitData", async (req, res) => {
  console.log(req.body);

  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets"
  });

  //Create client instance for auth
  const client = await auth.getClient();

  //Instance of googlesheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });


  const spreadsheetId = "1uPukRrpg-ZL6d0fJKLWRiO24w6GcNmaLC4NhpKY5C0M";

  //collect data from req.body by destructuring the object. These are the variables that represent each section of the form filled
  const {
    employee, date, shift,
    d4180, g4180, gt4180,
    d4179, g4179, gt4179,
    d4178, g4178, gt4178,
    d0004, g0004, dst0004, ndst0004,
    gHydrBreaker,
    d9046, g9046, dst9046, ndst9046,
    gBeltScale, gElectrical, tools
  } = req.body;

  //write rows to spreadsheet
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A:X", //state the horizontal range and which sheet you are appending data to
    valueInputOption: "USER_ENTERED", //This will convert data into proper formats (like date into date not string), so won't take raw data
    resource: {
      values: [
        [employee, date, shift,
          d4180, g4180, gt4180,
          d4179, g4179, gt4179,
          d4178, g4178, gt4178,
          d0004, g0004, dst0004, ndst0004,
          gHydrBreaker,
          d9046, g9046, dst9046, ndst9046,
          gBeltScale, gElectrical, tools], //these are the values that will be input into a single row, order matters
      ]
    }
  })

  res.redirect("/");
});


app.listen(3000, (req, res) => {
  console.log('Running on port 3000!')
})
