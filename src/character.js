function Character(args) {
    
    let fields = args.save;
    let name = args.name;
    let i = args.index;
    let static = args.static;
    // console.log(JSON.stringify(static));

    //TODO check the vars above and throw an error if they aren't all there!
    
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
            //EXAMPLE
            console.log(JSON.stringify(static.CardRepo.mushG));
            return statueItems;
        }()

    }
}

module.exports = {
    Character
}