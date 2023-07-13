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
});