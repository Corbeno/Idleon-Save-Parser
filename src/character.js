const Stat = require("./stat").Stat;
const StatName = require("./stat").name;

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
                let statueStatic = static.StatueRepo[j];
                let level = parseInt(statueArray[j][0]);
                statueItems.push({
                    "name": statueStatic.name,
                    "level": level,
                    "progress": statueArray[j][1],
                    [StatName]: function(){
                        return new Stat({
                            name: statueStatic.effect,
                            value: statueStatic.bonus * level
                        });
                    }()
                });
            }
            
            // console.log(JSON.stringify(statueItems));
            // console.log("");
            
            return statueItems;
        }()

    }
}

module.exports = {
    Character
}