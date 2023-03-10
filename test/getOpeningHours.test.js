const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste não passando argumentos. Deverá retornar um objeto com todos os horários', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    const actual = getOpeningHours();
    expect(expected).toEqual(actual);
  });

  it('Retorna "The zoo is closed" quando parâmetro é "Monday e 09:00-AM"', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });

  it('Retorna "The zoo is open" quando parâmetro é "Tuesday e 09:00-AM" ', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
  });

  it('Retorna "The zoo is closed" quando parâmetro é "Wednesday e 09:00-PM"', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
  });

  it('Retorna "The day must be valid. Example: Monday" quando parâmetro é "Thu e 09:00-AM"', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('Retorna "The abbreviation must be \'AM\' or \'PM\'" quando parâmetro é "Friday e 09:00-ZM"', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('Retorna "The hour should represent a number" quando parâmetro é "Saturday e C9:00-AM', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });

  it('Retorna "The minutes should represent a number" quando parâmetro é "Sunday e 09:c0-AM', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });

  it('Ao receber hora inválida retorna mensagem de erro correspondente', () => {
    expect(() => (getOpeningHours('Monday', '22:00-PM'))).toThrow('The hour must be between 0 and 12');
  });

  it('Ao receber minutos inválidos retorna mensagem de erro correspondente', () => {
    expect(() => (getOpeningHours('Monday', '12:76-PM'))).toThrow('The minutes must be between 0 and 59');
  });
});
