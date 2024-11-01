"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confessionRouter = void 0;
const express_1 = require("express");
const confession_controller_1 = require("../controllers/confession.controller");
// const {createConfession} = confessionController;
const router = (0, express_1.Router)();
router.route('/')
    .post(confession_controller_1.createConfession)
    .get(confession_controller_1.getAllConfession);
router.route('/:id')
    .get(confession_controller_1.getConfession)
    .put(confession_controller_1.updateConfession);
exports.confessionRouter = router;
//# sourceMappingURL=confession.routes.js.map