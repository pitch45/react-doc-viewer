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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocViewerRenderers = void 0;
var bmp_1 = __importDefault(require("./bmp"));
var html_1 = __importDefault(require("./html"));
var jpg_1 = __importDefault(require("./jpg"));
var msdoc_1 = __importDefault(require("./msdoc"));
var pdf_1 = __importDefault(require("./pdf"));
var png_1 = __importDefault(require("./png"));
var tiff_1 = __importDefault(require("./tiff"));
var txt_1 = __importDefault(require("./txt"));
var csv_1 = __importDefault(require("./csv"));
var gif_1 = __importDefault(require("./gif"));
var video_1 = __importDefault(require("./video"));
__exportStar(require("./pdf"), exports);
exports.DocViewerRenderers = [
    bmp_1.default,
    html_1.default,
    jpg_1.default,
    msdoc_1.default,
    pdf_1.default,
    png_1.default,
    tiff_1.default,
    txt_1.default,
    csv_1.default,
    gif_1.default,
    video_1.default,
];
