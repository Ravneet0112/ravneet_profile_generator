const employee = require('../lib/Employee');

describe('Employee', () => {
    it('should return an object', () => {
        const obj = new employee();
        expect(typeof(obj)).toBe('object');
    })
});

describe ("getName", () => {
    it("Should return name of the employ", () => {
        const name = "John";
        const obj = new employee(name);
        expect(obj.getName()).toBe(obj.name);
    })
});

describe ("getId", () => {
    it("Should return id of the employ", () => {
        const id = 1;
        const obj = new employee("John", id);
        expect(obj.getId()).toBe(obj.id);
    })
});

describe ("getEmail", () => {

    it("Should return email of the employ", () => { 
        const email = "test@test.com";
        const obj = new employee("John", 1, email);
        expect(obj.getEmail()).toBe(obj.email);
    })
    
});

describe ("getRole", () => {
    it("Should return role of the employ", () => {
        const role = "Employee";
        const obj = new employee("John", 1, "test@test.com", role);
        expect(obj.getRole()).toBe(role);
    })
});