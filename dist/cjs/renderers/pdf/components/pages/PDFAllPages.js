"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFAllPages = void 0;
var react_1 = __importStar(require("react"));
var state_1 = require("../../state");
var PDFSinglePage_1 = __importDefault(require("./PDFSinglePage"));
var PDFAllPages = function (_a) {
    var documentOverlay = _a.documentOverlay;
    var numPages = (0, react_1.useContext)(state_1.PDFContext).state.numPages;
    var PagesArray = [];
    for (var i = 0; i < numPages; i++) {
        PagesArray.push(react_1.default.createElement(PDFSinglePage_1.default, { documentOverlay: documentOverlay, key: i + 1, pageNum: i + 1 }));
    }
    return react_1.default.createElement(react_1.default.Fragment, null, PagesArray);
};
exports.PDFAllPages = PDFAllPages;
