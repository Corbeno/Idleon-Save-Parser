module.exports = require("./src/parse");

//TODO delete
const fs = require('fs')
var p = require("./src/parse");

fs.readFile("test/saveData.json", (err, data) => {
    if (err) throw err;
    p.parse(data.toString());
})
