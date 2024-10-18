"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.langRouter = void 0;
const express_1 = require("express");
const language_controllers_1 = require("../controllers/language.controllers");
const catchAsync_utils_1 = require("../shared/utils/catchAsync.utils");
const { create } = language_controllers_1.languageControllers;
const router = (0, express_1.Router)();
router.route('/').post((0, catchAsync_utils_1.catchAsync)(create));
exports.langRouter = router;
//# sourceMappingURL=language.routes.js.map