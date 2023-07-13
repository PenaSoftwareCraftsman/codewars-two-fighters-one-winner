const { Fighter } = require('./../src/index');

describe('Fighters', () => {
    it('Should a fighter named "Jose" when a fighter with the same name is created', () => {
    const fighter = new Fighter("Jose");

    expect(fighter.name).toBe("Jose");
    });
});