"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRouter = void 0;
const express_1 = require("express");
const services_controllers_1 = require("../controllers/services.controllers");
const { createService } = services_controllers_1.serviceController;
const router = (0, express_1.Router)();
router.route('/').post(createService);
exports.serviceRouter = router;
//# sourceMappingURL=service.routes.js.map