const { Fighter } = require('./../src/index');

describe('Fighters', () => {
    it('Should a fighter named "Jose" when a fighter with the same name is created', () => {
    const fighter = new Fighter("Jose");

    expect(fighter.name).toBe("Jose");
    });

    it('Should return a 2 when a fighter is created with ("Jose", 2)', () => {
        const fighter = new Fighter("Jose", 2);

    expect(fighter.health).toBe(2);
    });

    it('Should return a 2 when a fighter is created with ("Jose", 2, 2)', () => {
        const fighter = new Fighter("Jose", 2, 2);

        expect(fighter.damagePerAttack).toBe(2);
    });

    it('Should return 0 newHealth when damagePerAttack is 1 and health is 1', () => {
        const fighter = new Fighter("Jose", 1, 1);
        let oldHealth = 1;
        let newHealth = fighter.attack(oldHealth);

        expect(newHealth).toStrictEqual(0);
    });
});