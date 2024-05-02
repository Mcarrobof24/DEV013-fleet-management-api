"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taxis_controllers_1 = require("../controllers/taxis_controllers");
const router = (0, express_1.Router)();
//router.get('/taxis', getTaxis )
router.get('/taxis', taxis_controllers_1.getAllTaxis);
exports.default = router;
