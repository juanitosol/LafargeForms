if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
};

const express = require('express')
const app = express();



app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));


//use available routing
const primaryChecklistRoute = require('./routes/primaryChecklist');
const mainAndSurgeChecklistRoute = require('./routes/mainAndSurgeChecklist');
const secondary1ChecklistRoute = require('./routes/secondary1Checklist');
const secondary2ChecklistRoute = require('./routes/secondary2Checklist');
// app.use(primaryChecklistRoute);
// app.use(mainAndSurgeChecklistRoute);
// app.use(secondary1ChecklistRoute);
app.use(secondary2ChecklistRoute);





// app.listen(process.env.PORT, () => console.log('serving on heroku'));

app.listen(3000, (req, res) => { console.log('Running on port 3000!') })
