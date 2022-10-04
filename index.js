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

var typeOf = require("./lib/lib.js").typeOf;
var trimWhitespace = require("./lib/helper.js");

// Function to convert JSON to PLAIN TEXT
function toPlainText(data) {
  var handlers,
    indentLevel = "";
  handlers = {
    undefined: function () {
      return "null";
    },
    null: function () {
      return "null";
    },
    number: function (x) {
      return x;
    },
    boolean: function (x) {
      return x ? "true" : "false";
    },
    string: function (x) {
      return JSON.stringify(x);
    },
    array: function (x) {
      var output = "";
      if (0 === x.length) {
        output += "[]";
        return output;
      }
      let tempNum = 1;
      x.forEach(function (y, i) {
        var handler = handlers[typeOf(y)];
        if (!handler) {
          throw new Error("what the crap: " + typeOf(y));
        }
        if (typeOf(y) != "object") {
          if (tempNum == x.length) {
            output += handler(y, true);
          } else {
            output += handler(y, true) + ", ";
          }
        } else {
          output += "\n" + handler(y, true);
        }
        tempNum += 1;
      });
      return output;
    },
    object: function (x, inArray, rootNode) {
      var output = "";
      if (0 === Object.keys(x).length) {
        output += "{}";
        return output;
      }

      Object.keys(x).forEach(function (k, i) {
        var val = x[k],
          handler = handlers[typeOf(val)];
        if ("undefined" === typeof val) {
          return;
        }
        if (!handler) {
          throw new Error("what the crap: " + typeOf(val));
        }
        if (!(inArray && i === 0)) {
          output += "\n";
        }
        var space = " ".repeat(1);
        if (k.length <= 20) {
          var space = " ".repeat(20 - k.length);
        }
        output += k + space + ": " + handler(val).toString().replace(/"/g, "");
      });
      return output;
    },
    function: function () {
      return "[object Function]";
    },
  };
  return trimWhitespace(handlers[typeOf(data)](data, true, true) + "\n");
}

module.exports.toPlainText = toPlainText;
