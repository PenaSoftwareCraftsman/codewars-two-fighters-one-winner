const { Fighter, declare_winner } = require('./../src/index');

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
        const fighter2 = new Fighter("Harry", 1, 1);
        fighter2.health = fighter.attack(fighter2.health);

        expect(fighter2.health).toStrictEqual(0);
    });
});

describe('declare_winner', () => {
    it('Should return "Lew" when Lew attacks first with 1 damagePerAttack and Harry 1 as health and Harry dead', () => {
        const fighter = new Fighter("Lew", 1, 1);
        const fighter2 = new Fighter("Harry", 1, 1);

        expect(declare_winner(fighter, fighter2)).toBe(fighter.name);
    });

    it('Should return "Harry" when Harry attacks with 1 damagePerAttack and Lew 1 as health and Lew dead', () => {
        const fighter = new Fighter("Lew", 1, 1);
        const fighter2 = new Fighter("Harry", 1, 1);

        expect(declare_winner(fighter, fighter2, "Harry")).toBe(fighter2.name);
    });
});