const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should return an object", () => {
        const obj = new Engineer();
        expect(typeof(obj)).toBe("object");
    })
});

describe("getGithub", () => {

    it("Should return github of the employ", () => {
        const github = new Engineer("John", 1, "test@test.com", "test@github.com");

        expect(github.getGithub()).toBe("test@github.com");
    })
});

describe("getRole", () => {
    it("Should return role of the employ", () => {
        const role = new Engineer("John", 1, "test@test.com", "test@github.com", "Engineer");

        expect(role.getRole()).toBe("Engineer");
    })
});
