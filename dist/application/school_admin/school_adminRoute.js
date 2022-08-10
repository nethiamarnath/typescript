"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const school_adminController = require("./school_adminController");
const school_adminValidation_1 = __importDefault(require("./school_adminValidation"));
const validatorResponse_1 = __importDefault(require("../../helper/validatorResponse"));
const token_verification_1 = __importDefault(require("../../middleware/token_verification"));
router.post("/details", (0, validatorResponse_1.default)(school_adminValidation_1.default.sa_data), school_adminController.sa_data);
router.get('/', token_verification_1.default, (0, validatorResponse_1.default)(school_adminValidation_1.default.sa_query), school_adminController.sa_list);
router.put('/:scl_id', token_verification_1.default, (0, validatorResponse_1.default)(school_adminValidation_1.default.sa_update), school_adminController.sa_update);
router.delete('/:scl_id', token_verification_1.default, (0, validatorResponse_1.default)(school_adminValidation_1.default.sa_delete), school_adminController.sa_delete);
router.post('/login', (0, validatorResponse_1.default)(school_adminValidation_1.default.sa_login), school_adminController.sa_login);
module.exports = router;
