"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const staff_class_Controller = require("./s_cController");
const s_cValidation_1 = __importDefault(require("./s_cValidation"));
const validatorResponse_1 = __importDefault(require("../../helper/validatorResponse"));
router.post("/details", (0, validatorResponse_1.default)(s_cValidation_1.default.sc_data), staff_class_Controller.staff_class_data);
router.get('/', (0, validatorResponse_1.default)(s_cValidation_1.default.sc_query), staff_class_Controller.staff_class_list);
router.put('/:id', (0, validatorResponse_1.default)(s_cValidation_1.default.sc_update), staff_class_Controller.staff_class_update);
router.delete('/:id', (0, validatorResponse_1.default)(s_cValidation_1.default.sc_delete), staff_class_Controller.staff_class_delete);
module.exports = router;
