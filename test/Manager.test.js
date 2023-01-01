const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should return an object", () => {
        const obj = new Manager();
        expect(typeof(obj)).toBe("object");
    })
});

describe("getOfficeNumber", () => {

    it("Should return office number of the employ", () => {
        const officeNumber = new Manager("John", 1, "test@test.com", 369);
        expect(officeNumber.getOfficeNumber()).toBe(369);
    })
});

describe("getRole", () => {
    it("Should return role of the employ", () => {
        const role = new Manager("John", 1, "test@test.com", 369, "Manager");
        expect(role.getRole()).toBe("Manager");   
    })
});