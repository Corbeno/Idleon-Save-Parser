const Account = require("./account").Account;
const Character = require("./character").Character

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

    const account = new Account();
    for ([i, charName] of charNames.entries()) {
        account.addChar(new Character(saveJson, charName, i));
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

module.exports = {
    parse
}