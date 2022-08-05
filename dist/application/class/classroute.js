"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const classController = require("./classController");
const classvalidation_1 = __importDefault(require("./classvalidation"));
const validatorResponse_1 = __importDefault(require("../../helper/validatorResponse"));
router.post("/details", (0, validatorResponse_1.default)(classvalidation_1.default.class_data), classController.class_data);
router.get('/', (0, validatorResponse_1.default)(classvalidation_1.default.class_query), classController.class_list);
router.put('/:cls_id', (0, validatorResponse_1.default)(classvalidation_1.default.class_update), classController.class_update);
router.delete('/:cls_id', (0, validatorResponse_1.default)(classvalidation_1.default.class_delete), classController.class_delete);
module.exports = router;
