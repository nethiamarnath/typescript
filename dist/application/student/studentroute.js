"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const studentController = require("./studentController");
const studentvalidation_1 = __importDefault(require("./studentvalidation"));
const validatorResponse_1 = __importDefault(require("../../helper/validatorResponse"));
router.post("/details", (0, validatorResponse_1.default)(studentvalidation_1.default.student_data), studentController.student_data);
router.get('/', (0, validatorResponse_1.default)(studentvalidation_1.default.student_query), studentController.student_list);
router.put('/:std_id', (0, validatorResponse_1.default)(studentvalidation_1.default.student_update), studentController.student_update);
router.delete('/:std_id', (0, validatorResponse_1.default)(studentvalidation_1.default.student_delete), studentController.student_delete);
module.exports = router;
