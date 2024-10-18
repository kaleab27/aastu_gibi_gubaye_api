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
exports.languageControllers = void 0;
const data_source_1 = require("../data_source");
const languageModel_1 = require("../models/languageModel");
const languageRepo = data_source_1.AppDataSource.getRepository(languageModel_1.Language);
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newLang = yield languageRepo.save(req.body);
    if (newLang) {
        res.status(201).json({
            status: 'success',
            data: {
                language: newLang,
            },
        });
    }
    else {
        next('Language not added');
    }
});
exports.languageControllers = {
    create,
};
//# sourceMappingURL=language.controllers.js.map