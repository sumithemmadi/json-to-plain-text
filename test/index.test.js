const { jsonToPlainText } = require("../dist/cjs/index.js");

describe("jsonToPlainText function", () => {
  it("should convert simple object to formatted plain text", () => {
    const data = {
      name: "John",
      age: 30,
      isEmployed: true,
    };

    const expectedOutput = `
name       = John
age        = 30
isEmployed = true`;

    const result = jsonToPlainText(data, { color: false, seperator: "=" });
    expect(result).toBe(expectedOutput);
  });
});
