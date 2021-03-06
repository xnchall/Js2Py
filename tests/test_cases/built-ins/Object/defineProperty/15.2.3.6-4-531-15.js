// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-531-15
description: >
    ES5 Attributes - Updating a named accessor property 'P' using
    simple assignment is successful, 'A' is an Array object (8.12.5
    step 5.b)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = [];

        var verifySetFunc = "data";
        var setFunc = function (value) {
            verifySetFunc = value;
        };
        var getFunc = function () {
            return verifySetFunc;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: true
        });

        obj.prop = "overrideData";
        var propertyDefineCorrect = obj.hasOwnProperty("prop");
        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return propertyDefineCorrect && desc.set === setFunc && obj.prop === "overrideData";
    }
runTestCase(testcase);
