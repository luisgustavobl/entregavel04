const contagem = require('../funcoes/contagem');

test("Deve contar quantos números inteiros menores ou iguais a 5 existem no array", () => {
    expect(contagem(5, [1, 2, 3, 4, 5, 6, 7])).toBe(5);
});
test("Deve contar quantos números inteiros menores ou iguais a 3 existem no array", () => {
    expect(contagem(3, [0, 1, 2, 3, 4, 5])).toBe(4);
});