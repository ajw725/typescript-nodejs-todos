"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const todos_1 = __importDefault(require("./routes/todos"));
const app = express_1.default();
app.use(body_parser_1.json()); // parse incoming request body as JSON -> req.body
app.use('/todos', todos_1.default);
// typical express middleware
// app.use((req, res, next) => {});
// error-handling middleware
app.use((err, _req, res, _next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
