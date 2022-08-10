"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const subject_Controller = require("./subject_Controller");
const subject_Validation_1 = __importDefault(require("./subject_Validation"));
const validatorResponse_1 = __importDefault(require("../../helper/validatorResponse"));
router.post("/details", (0, validatorResponse_1.default)(subject_Validation_1.default.subject_data), subject_Controller.subject_data);
router.get('/', (0, validatorResponse_1.default)(subject_Validation_1.default.subject_query), subject_Controller.subject_list);
router.put('/:id', (0, validatorResponse_1.default)(subject_Validation_1.default.subject_update), subject_Controller.subject_update);
router.delete('/:id', (0, validatorResponse_1.default)(subject_Validation_1.default.subject_delete), subject_Controller.subject_delete);
module.exports = router;
