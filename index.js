const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('node-fetch');
const path = require("path");
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: false }));
var arr = new Array();
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("index");
});

app.get('/testAPI/', (req, res) => {
    var roll = req.query.rollNo;
    if (roll != undefined && roll != '' && roll != null) {
        roll = roll.split(',');
        arr.length = 0;
        async function show() {
            for (i = 0; i < roll.length; i++) {
                if (roll[i] == "" || roll[i] == null) continue;
                var r = await fetch('http://proedge.me/test.php?rollnumber=123' + roll[i]);
                var text = await r.text();
                arr.push({ "rollno": roll[i], "result": text });
                console.log({ "rollno": roll[i], "result": text });
            }
            console.log("==========Results Published===========");
            res.render('display', { items: arr });

        }
        show();
    } else {
        res.send('Invalid Query');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Running on port http://localhost:" + port)
})