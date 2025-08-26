// MIT License
// Copyright (c) 2021 Emmadi Sumith Kumar
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
/**
 * Convert JSON-like data or plain JavaScript objects to formatted plain text representation.
 */
function jsonToPlainText(data, options) {
    const visited = new Set();
    let indentLevel = 1;
    const defaultOptions = {
        spacing: true,
        seperator: ":",
        squareBracketsForArray: false,
        doubleQuotesForKeys: false,
        doubleQuotesForValues: false,
    };
    const outputOptions = { ...defaultOptions, ...options };
    // Helper function to determine the type of a variable
    function getType(variable) {
        const type = typeof variable;
        if (type === "object") {
            if (variable === null)
                return "null";
            if (Array.isArray(variable))
                return "array";
            if (variable instanceof Date)
                return "date";
            if (variable instanceof RegExp)
                return "regexp";
            return "object";
        }
        return type;
    }
    // Helper function to handle arrays
    function handleArray(arr) {
        if (arr.length === 0)
            return "[]";
        const output = arr
            .map((item) => {
            const handler = handlers[getType(item)];
            if (!handler)
                throw new Error("Unsupported data type: " + getType(item));
            return handler(item, true);
        })
            .join(", ");
        return outputOptions.squareBracketsForArray ? `[ ${output} ]` : output;
    }
    // Helper function to handle objects
    function handleObject(obj) {
        if (Object.keys(obj).length === 0)
            return "{}";
        let output = "";
        Object.keys(obj).forEach((key) => {
            const value = obj[key];
            if (typeof value === "undefined")
                return;
            const handler = handlers[getType(value)];
            if (!handler)
                throw new Error("Unsupported data type: " + getType(value));
            if (key.length >= indentLevel)
                indentLevel = key.length;
            output +=
                "\n" +
                    (outputOptions.doubleQuotesForKeys ? `"${key}"` : key) +
                    "}json-to-plain-text-special-string-" +
                    key.length +
                    "{" +
                    handler(value, true);
        });
        return output;
    }
    // Handlers for different data types
    const handlers = {
        undefined: () => "undefined",
        null: () => "null",
        number: (x) => x.toString(),
        boolean: (x) => (x ? "true" : "false"),
        string: (x) => (outputOptions.doubleQuotesForValues ? `"${x}"` : x),
        array: (x) => {
            if (visited.has(x))
                return "[Circular]";
            visited.add(x);
            const output = handleArray(x);
            visited.delete(x);
            return output;
        },
        object: (x) => {
            if (visited.has(x))
                return "[Circular]";
            visited.add(x);
            const output = handleObject(x);
            visited.delete(x);
            return output;
        },
        date: (x) => x.toISOString(),
        regexp: (x) => x.toString(),
        function: () => "[object Function]",
    };
    return handlers[getType(data)](data, false).replace(/}json-to-plain-text-special-string-(\d+){/g, (match, number) => {
        const space = parseInt(number, 10);
        return outputOptions.spacing
            ? " ".repeat(indentLevel - space) + ` ${outputOptions.seperator} `
            : ` ${outputOptions.seperator} `;
    });
}
export { jsonToPlainText };
