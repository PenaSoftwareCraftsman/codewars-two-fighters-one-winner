function Fighter(name, health, damagePerAttack){
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack

    this.attack = function(oldHealth){
        return oldHealth - this.damagePerAttack;
    };
}

module.exports = {
    Fighter
}