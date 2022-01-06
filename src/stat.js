function Stat(args){
    let name = args.name;
    let value = args.value;

    //TODO check args and throw errors if not passed correctly

    //possibly standardize the name input here?
    //this might be the best place to do it actually....

    return {
        name: name, 
        value: value
    }
}

const name = "stat";

module.exports = {
    Stat,
    name
}