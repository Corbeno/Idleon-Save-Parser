const Account = require("./account").Account;
const Character = require("./character").Character

function parse(data) {
    var json = JSON.parse(data);

    //TODO check if data is actually correct and throw errors if not


    const account = new Account();
    for ([i, charName] of json.charNameData.entries()) {
        let save = json.saveData;
        // let level = save[]
        account.addChar(new Character(
            charName,

        ));
    }

    console.log(account);

}

module.exports = {
    parse
}