"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const staffController = require("./staffController");
const staffValidation_1 = __importDefault(require("./staffValidation"));
const validatorResponse_1 = __importDefault(require("../../helper/validatorResponse"));
const verify_token = require("../../middleware/token_verification");
router.post("/details", (0, validatorResponse_1.default)(staffValidation_1.default.staff_data), staffController.staff_data);
router.get('/', (0, validatorResponse_1.default)(staffValidation_1.default.staff_query), staffController.staff_list);
router.put('/:std_id', verify_token, (0, validatorResponse_1.default)(staffValidation_1.default.staff_update), staffController.staff_update);
router.delete('/:std_id', verify_token, (0, validatorResponse_1.default)(staffValidation_1.default.staff_delete), staffController.staff_delete);
router.post('/login', (0, validatorResponse_1.default)(staffValidation_1.default.staff_login), staffController.staff_login);
module.exports = router;
