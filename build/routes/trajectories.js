"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trajectories_controllers_1 = require("../controllers/trajectories_controllers");
const router = (0, express_1.Router)();
router.get('/trajectories/:id', trajectories_controllers_1.getLocationById);
exports.default = router;
