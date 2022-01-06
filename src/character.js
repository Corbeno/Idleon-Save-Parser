function Character(fields, name, i) {
    return {
        name,
        level: parseInt(fields["PVStatList_" + i][4]),
        // charClass,
        // money,
        // strength,
        // agility,
        // wisdom,
        // luck,
        // afkTarget

        statues: function () {
            let statueArray = JSON.parse(fields["StatueLevels_" + i]);
            let statueItems = [];
            for (var j = 0; j < statueArray.length; j++) {
                statueItems.push({
                    "level": parseInt(statueArray[j][0]),
                    "progress": statueArray[j][1]
                });
            }
            return statueItems;
        }()

    }
}

module.exports = {
    Character
}