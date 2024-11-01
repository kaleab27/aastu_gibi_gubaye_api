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
exports.createConfession = createConfession;
exports.getAllConfession = getAllConfession;
exports.getConfession = getConfession;
exports.updateConfession = updateConfession;
require("reflect-metadata");
const data_source_1 = require("../data_source");
const confessionModel_1 = require("../models/confessionModel");
const confessionRepo = data_source_1.AppDataSource.getRepository(confessionModel_1.Confession);
function createConfession(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const reqBody = req.body;
            const newConfession = yield confessionRepo.save(reqBody);
            res.status(201).json({
                status: 'success',
                data: {
                    newConfession
                }
            });
        }
        catch (err) {
            throw new Error(err.message);
        }
    });
}
function getAllConfession(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const confession = yield confessionRepo.find();
            res.status(200).json({
                status: 'success',
                data: {
                    confession
                }
            });
        }
        catch (err) {
            res.status(404).json({
                status: 'fail',
                message: err.message
            });
        }
    });
}
function getConfession(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const confessionId = req.params.id;
            const confession = yield confessionRepo.findOne({ where: { id: confessionId } });
            if (!confession) {
                res.status(404).json({
                    status: 'fail',
                    message: 'there is no user in this id'
                });
            }
            res.status(200).json({
                status: 'success',
                data: {
                    confession
                }
            });
        }
        catch (err) {
            throw new Error('error occured');
        }
    });
}
function updateConfession(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const confessionId = req.params.id;
            const reqBody = req.body;
            const confession = yield confessionRepo.findOne({ where: { id: confessionId } });
            if (!confession) {
                res.status(404).json({
                    status: 'fail',
                    message: 'there is no confession by this id'
                });
            }
            yield confessionRepo.update(confessionId, reqBody);
            res.status(200).json({
                status: 'success',
                message: 'confession updated'
            });
        }
        catch (err) {
            res.status(404).json({
                status: 'fail',
                message: err.message
            });
        }
    });
}
//# sourceMappingURL=confession.controller.js.map