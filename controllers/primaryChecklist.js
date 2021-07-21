
const path = require('path');
const { google } = require('googleapis');

module.exports.renderPrimaryChecklist = (req, res) => {
    res.sendFile(path.join(__dirname, '/..', 'views', 'primaryCheklist.html'));
};



module.exports.postPrimaryChecklist = async (req, res) => {

    const auth = new google.auth.GoogleAuth({
        keyFile: "API-Credentials/credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    //Create client instance for auth
    const client = await auth.getClient();

    //Instance of googlesheets API
    const googleSheets = google.sheets({ version: "v4", auth: client });


    const spreadsheetId = process.env.SPREADSHEET_ID;

    //collect data from req.body by destructuring the object. These are the variables that represent each section of the form filled
    const {
        employee, date, shift,
        d4180, g4180, gt4180,
        d4179, g4179, gt4179,
        d4178, g4178, gt4178,
        d0004, g0004, dst0004, ndst0004,
        gHydrBreaker,
        d9046, g9046, dst9046, ndst9046,
        gBeltScale, gElectrical, sections, hg4180, hg4179,
        hg4178, hg0004, hgHydrBreaker, hg9046, hgBeltScale,
        hgElectrical, hTools, hd4180, hd4179, hd4178, hd0004,
        hd9046,
    } = req.body;


    const defectives = { d4180: d4180, d4179: d4179, d4178: d4178, d0004: d0004, d9046: d9046 }
    const guards = { g4180: g4180, g4179: g4179, g4178: g4178, g0004: g0004, g9046: g9046, gHydrBreaker: gHydrBreaker, gBeltScale: gBeltScale, gElectrical: gElectrical }
    //analyzes if defectives are checked or if guards are unchecked
    const defectArray = []; //array is empty, but will systematically input any defects or issues into it
    let isAllGuardsChecked = 'Yes';
    let defectsExist = 'No';

    for (let key in defectives) {
        if (defectives[key]) {
            defectArray.push(key)
            defectsExist = 'Yes'
        }
    }

    for (let key in guards) {
        if (!guards[key]) {
            defectArray.push(key)
            isAllGuardsChecked = 'No'
        };
    };
    // ^^ function is done, defectArray will have guards or defects that had issues stored

    //write rows to spreadsheet
    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Primary!A:M", //state the horizontal range and which sheet you are appending data to
        valueInputOption: "USER_ENTERED", //This will convert data into proper formats (like date into date not string), so won't take raw data
        resource: {
            values: [
                [date, employee, shift,
                    gt4180, gt4179,
                    gt4178,
                    dst0004, ndst0004,
                    dst9046, ndst9046,
                    isAllGuardsChecked, defectsExist, '-',
                ], //these are the values that will be input into a single row, order matters
            ]
        }
    });

    const allDefects = [
        hd4180, hd4179, hd4178, hd0004, hd9046, hg4180, hg4179,
        hg4178, hg0004, hgHydrBreaker, hg9046,
        hgBeltScale, hgElectrical, hTools,
    ]
    const allDefectsString = allDefects.filter(Boolean).join("\n");

    if (defectArray.length) {

        await googleSheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range: "BackLog!A:E",
            valueInputOption: "USER_ENTERED",
            resource: {
                values: [
                    [date, employee, sections, allDefectsString, '-',
                    ]
                ]
            }
        })
    }



    res.redirect("/");

}