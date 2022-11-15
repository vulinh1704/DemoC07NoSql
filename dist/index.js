"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = require("./src/router/router");
const DB_URL = 'mongodb://localhost:27017/demo_c07';
mongoose_1.default.connect(DB_URL).then(() => {
    console.log('Db connected');
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('', router_1.router);
app.listen(3000, () => {
    console.log('Server is running');
});
//# sourceMappingURL=index.js.map