const Intern = require('../lib/Intern');

describe('Intern', () => {

    it('should return an object', () => {
        const obj = new Intern();
        expect(typeof(obj)).toBe('object');
    })
});

describe('getSchool', () => {

    it('Should return school of the employ', () => {
        const school = new Intern('John', 1, 'test@test.com', 'Bootcamp');

        expect(school.getSchool()).toBe('Bootcamp');
    })
}); 

describe('getRole', () => {
    it('Should return role of the employ', () => {
        const role = new Intern('John', 1, 'test@test.com', 'Bootcamp', 'Intern');

        expect(role.getRole()).toBe('Intern');
    })
});