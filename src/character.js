function Character(name, level, charClass, money, strength, agility, wisdom, luck, afkTarget) {
    return {
        name,
        level,
        charClass,
        money,
        strength,
        agility,
        wisdom,
        luck,
        afkTarget
    }
}

module.exports = {
    Character
}