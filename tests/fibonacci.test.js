const fibonacci = require('../funcoes/fibonacci');

test("Deve retornar o valor da posição 10 da tabela de Fibonacci", () => {
    expect(fibonacci(10)).toBe(34);
});
test("Deve retornar o valor da posição 2 da tabela de Fibonacci", () => {
    expect(fibonacci(2)).toBe(1);
});