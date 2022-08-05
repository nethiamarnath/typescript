"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const schoolController = require("./schoolController");
const schoolValidation_1 = __importDefault(require("./schoolValidation"));
const validatorResponse_1 = __importDefault(require("../../helper/validatorResponse"));
router.post("/details", (0, validatorResponse_1.default)(schoolValidation_1.default.school_data), schoolController.school_data);
router.get('/', (0, validatorResponse_1.default)(schoolValidation_1.default.school_query), schoolController.school_list);
router.put('/:scl_id', (0, validatorResponse_1.default)(schoolValidation_1.default.school_update), schoolController.school_update);
router.delete('/:scl_id', (0, validatorResponse_1.default)(schoolValidation_1.default.school_delete), schoolController.school_delete);
module.exports = router;
