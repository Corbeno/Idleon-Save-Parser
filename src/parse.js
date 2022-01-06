const Account = require("./account").Account;
const Character = require("./character").Character
const fs = require('fs')

function parse(charNames, saveData) {
    if (charNames == undefined || charNames == null || saveData == undefined || saveData == null) {
        //TODO throw error
        console.error("ERROR input is invalid!");
    }

    let saveJson = null;

    //TODO add better checking if the input data is valid
    if (isJson(saveData)) {
        saveJson = saveData;
    } else {
        saveJson = JSON.parse(saveData);
    }

    let static = getStaticData();

    const account = new Account();
    for ([i, charName] of charNames.entries()) {
        account.addChar(new Character({save: saveJson, name: charName, index: i, static: static}));
    }
    return account;

}

function isJson(item) {
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;
    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    if (typeof item === "object" && item !== null) {
        return true;
    }
    return false;
}

function getStaticData(){
    let path = "IdleonWikiBot3.0/exported/repo/";
    let files = fs.readdirSync(path);
    let r = {};
    files.forEach(function(file){
        let json = JSON.parse(fs.readFileSync(path + file));
        r[file.replace(".json", "")] = json;
    });
    return r;
}

module.exports = {
    parse
}