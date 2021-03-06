// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.3-2-22
description: >
    Object.getOwnPropertyDescriptor - argument 'P' is a number that
    converts to a string (value is 0.000001)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = { "0.000001": 1 };

        var desc = Object.getOwnPropertyDescriptor(obj, 0.000001);

        return desc.value === 1;
    }
runTestCase(testcase);
