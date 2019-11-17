const utils = require("../../src/constants_and_utils/utils");

describe("utils", () => {
  it("requiredParam() - passing only mandatory arguments", () => {
    const someFunction = function() {};
    const actualResult = function() {
      utils.requiredParam(someFunction);
    };
    const expectedResult =
      `Parameter 'htmlElement' is missing at function 'someFunction()'. 
Fill the required parameter.`;

    expect(actualResult).toThrow(new Error(expectedResult));
  });

  it("requiredParam() - passing all arguments", () => {
    const someOtherFunction = function() {};
    const requiredParameter = "text";
    const actualResult = function() {
      utils.requiredParam(someOtherFunction, requiredParameter);
    };
    const expectedResult =
      `Parameter '${requiredParameter}' is missing at function 'someOtherFunction()'. 
Fill the required parameter.`;

    expect(actualResult).toThrow(new Error(expectedResult));
  });
});