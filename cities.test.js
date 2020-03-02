const Cities = require('./Models/cities')

test('Can create a city object', () => {
    let cities = new Cities();
    expect(cities).toBeInstanceOf(Cities);
});
