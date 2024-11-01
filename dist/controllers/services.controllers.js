"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceController = void 0;
require("reflect-metadata");
const data_source_1 = require("../data_source");
const serviceModel_1 = require("../models/serviceModel");
const serviceRepo = data_source_1.AppDataSource.getRepository(serviceModel_1.Service);
const createService = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const reqBody = req.body;
            const service = yield serviceRepo.save(reqBody);
            res.status(201).json({
                status: 'success',
                data: {
                    service
                }
            });
        }
        catch (err) {
            throw new Error(err.message);
        }
    });
};
exports.serviceController = {
    createService
};
//# sourceMappingURL=services.controllers.js.map