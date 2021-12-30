function Account() {
    let chars = [];
    return {
        chars,
        addChar(char) { chars.push(char) }
    }
}


module.exports = {
    Account
}