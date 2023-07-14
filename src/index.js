function Fighter(name, health, damagePerAttack){
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack

    this.attack = function(oldHealth){
        return oldHealth - this.damagePerAttack;
    };
}

const declare_winner = (fighter, fighter2) =>{

    fighter2.health = fighter.attack(fighter2.health);

    return fighter.name;
}

module.exports = {
    Fighter,
    declare_winner
}