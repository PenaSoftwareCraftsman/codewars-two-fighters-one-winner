const Fighter = (name) =>{
    this.name = name;
    this.toString = function() { return this.name; }
}

module.exports = {
    Fighter
}