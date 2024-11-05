"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRouter = void 0;
const express_1 = require("express");
const services_controllers_1 = require("../controllers/services.controllers");
// const {createService} = serviceController;
const router = (0, express_1.Router)();
router.route('/')
    .post(services_controllers_1.createService)
    .get(services_controllers_1.getServices);
router.route('/:id')
    .put(services_controllers_1.updateService);
exports.serviceRouter = router;
//# sourceMappingURL=service.routes.js.map