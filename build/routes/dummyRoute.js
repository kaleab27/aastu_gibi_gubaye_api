'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const express_1 = require('express');
const myControl_1 = require('../controllers/myControl');
const router = (0, express_1.Router)();
router.route('/').get(myControl_1.SayHi);
exports.default = router;
//# sourceMappingURL=dummyRoute.js.map
