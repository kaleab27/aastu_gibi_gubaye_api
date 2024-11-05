"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.langRouter = void 0;
const express_1 = require("express");
const language_controllers_1 = require("../controllers/language.controllers");
const catchAsync_utils_1 = require("../shared/utils/catchAsync.utils");
// const {create} = languageControllers;
const router = (0, express_1.Router)();
router.route('/')
    .post((0, catchAsync_utils_1.catchAsync)(language_controllers_1.create))
    .get(language_controllers_1.getLanguage);
router.route('/:id')
    .put(language_controllers_1.updateLanguage);
exports.langRouter = router;
//# sourceMappingURL=language.routes.js.map