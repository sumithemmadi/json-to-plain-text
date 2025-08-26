const { jsonToPlainText } = require("../dist/cjs/index.js");

describe("jsonToPlainText function", () => {
  test("should convert simple object to formatted plain text", () => {
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
  test("handles empty object", () => {
    expect(jsonToPlainText({})).toBe("{}");
  });

  test("handles empty array", () => {
    expect(jsonToPlainText([])).toBe("[]");
  });

  test("handles null and undefined", () => {
    expect(jsonToPlainText({ a: null, b: undefined })).toContain("a : null");
  });

  test("handles numbers, booleans, and strings", () => {
    const obj = { age: 25, active: true, name: "Sumith" };
    const result = jsonToPlainText(obj, { doubleQuotesForValues: true });
    expect(result).toContain(`"Sumith"`);
  });

  test("handles dates", () => {
    const date = new Date("2020-01-01T00:00:00Z");
    const result = jsonToPlainText({ d: date });
    expect(result).toContain("2020-01-01T00:00:00.000Z");
  });

  test("handles regex", () => {
    const result = jsonToPlainText({ pattern: /abc/g });
    expect(result).toContain("/abc/g");
  });

  test("handles functions", () => {
    const result = jsonToPlainText({ fn: () => {} });
    expect(result).toContain("[object Function]");
  });

  test("handles circular references", () => {
    const obj = {};
    obj.self = obj;
    const result = jsonToPlainText(obj);
    expect(result).toContain("[Circular]");
  });
});
