"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const staff_role_Controller = require("./s_rController");
const s_rValidation_1 = __importDefault(require("./s_rValidation"));
const validatorResponse_1 = __importDefault(require("../../helper/validatorResponse"));
router.post("/details", (0, validatorResponse_1.default)(s_rValidation_1.default.sr_data), staff_role_Controller.staff_role_data);
router.get('/', (0, validatorResponse_1.default)(s_rValidation_1.default.sr_query), staff_role_Controller.staff_role_list);
router.put('/:id', (0, validatorResponse_1.default)(s_rValidation_1.default.sr_update), staff_role_Controller.staff_role_update);
router.delete('/:id', (0, validatorResponse_1.default)(s_rValidation_1.default.sr_delete), staff_role_Controller.staff_role_delete);
module.exports = router;
