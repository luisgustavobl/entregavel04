const mdc = require('../funcoes/mdc');

test("Deve retornar o valor do MDC entre 48 e 18", () => {
    expect(mdc(48, 18)).toBe(6);
});
test("Deve retornar o valor do MDC entre 56 e 98", () => {
    expect(mdc(56, 98)).toBe(14);
});