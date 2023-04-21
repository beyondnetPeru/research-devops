"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3002;
app.use("/", (req, res) => {
    res.send("Listening products...");
});
app.listen(PORT, () => {
    console.log("PROUCTS-API is running on PORT:", PORT);
});