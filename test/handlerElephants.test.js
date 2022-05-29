const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('retorna a quantidade de elefantes', () => {
    const expected = 4;
    const actual = handlerElephants('count');
    expect(expected).toBe(actual);
  });

  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    const actual = handlerElephants('names');
    expect(expected).toStrictEqual(actual);
  });

  it('retorna a média de idade dos elefantes', () => {
    const expected = 10.5;
    const actual = handlerElephants('averageAge');
    expect(expected).toBe(actual);
  });

  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    const expected = 'NW';
    const actual = handlerElephants('location');
    expect(expected).toBe(actual);
  });

  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    const actual = handlerElephants('availability');
    expect(expected).toStrictEqual(actual);
  });

  it('Retorna "undefined" se não for passado parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('handlerElephants deve retornar "Parâmetro inválido, é necessário uma string" quando o parâmetro passado não for uma string', () => {
    const actual = handlerElephants(3);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  });
});
