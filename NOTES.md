# Notes

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

# Domains

- Fighters have name, health, damagePerAttack

name is the fighter's name
health is how much damage he takes until be dead
damagePerAttack how much damage per attack it deals

Death is defined as having health <= 0.

Input: 2  fighters
output: 
  - declare_winner: Fighter name
  messages of events like attacks and how much health the fighter has



**Label**  
✅ done 🚧 WIP ❌ ERROR

TODO:

# Pomodoro 1 🍅:

- Domains search ✅
- Testing:
  - Should a fighter named "Jose" when a fighter with the same name is created 🚧