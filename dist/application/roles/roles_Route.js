"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const roles_Controller = require("./roles_Controller");
const roles_Validation_1 = __importDefault(require("./roles_Validation"));
const validatorResponse_1 = __importDefault(require("../../helper/validatorResponse"));
router.post("/details", (0, validatorResponse_1.default)(roles_Validation_1.default.role_data), roles_Controller.role_data);
router.get('/', (0, validatorResponse_1.default)(roles_Validation_1.default.role_query), roles_Controller.role_list);
router.put('/:Role_id', (0, validatorResponse_1.default)(roles_Validation_1.default.role_update), roles_Controller.role_update);
router.delete('/:Role_id', (0, validatorResponse_1.default)(roles_Validation_1.default.role_delete), roles_Controller.role_delete);
module.exports = router;
