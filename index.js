module.exports = require("./src/parse");

//TODO delete - this will be handled by the user
const fs = require('fs')
var p = require("./src/parse");

fs.readFile("test/saveData.json", (err, data) => {
    if (err) throw err;
    let json = JSON.parse(data.toString());
    let account = p.parse(json.charNameData, json.saveData);
    // console.log(JSON.stringify(account.chars[2].statues));
})
