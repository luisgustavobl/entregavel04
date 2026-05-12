const primo = require('../funcoes/primo');

test("Deve retornar true para o número 7", () => {
    expect(primo(7)).toBe(true);
});
test("Deve retornar false para o número 10", () => {
    expect(primo(10)).toBe(false);
});