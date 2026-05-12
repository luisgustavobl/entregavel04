const quicksort = require('../funcoes/quicksort');

test('deve ordenar corretamente um array de números', () => {
    expect(quicksort([3, 6, 8, 10, 1, 2, 1])).toEqual([1, 1, 2, 3, 6, 8, 10]);
});
test('deve retornar um array vazio quando a entrada for um array vazio', () => {
    expect(quicksort([])).toEqual([]);
});
test('deve ordenar um array com números negativos', () => {
    expect(quicksort([-3, -1, -2, -5, -4])).toEqual([-5, -4, -3, -2, -1]);
});
test('deve ordenar um array com números repetidos', () => {
    expect(quicksort([5, 3, 8, 3, 9, 1, 5])).toEqual([1, 3, 3, 5, 5, 8, 9]);
});