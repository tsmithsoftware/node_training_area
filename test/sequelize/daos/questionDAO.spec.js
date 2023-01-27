jest.mock('sequelize', () => {
  const mSequelize = {
    authenticate: jest.fn(),
    define: jest.fn(),
  };
  const actualSequelize = jest.requireActual('sequelize');
  return { Sequelize: jest.fn(() => mSequelize), DataTypes: actualSequelize.DataTypes };
});


test('return true', () => {
    expect(1).toBe(1)
  });