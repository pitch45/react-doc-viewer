"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.createPDFRenderer = void 0;
var react_1 = __importStar(require("react"));
var react_pdf_1 = require("react-pdf");
var styled_components_1 = __importDefault(require("styled-components"));
var PDFPages_1 = __importDefault(require("./components/pages/PDFPages"));
var PDFControls_1 = __importDefault(require("./components/PDFControls"));
var state_1 = require("./state");
var actions_1 = require("./state/actions");
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";
react_pdf_1.pdfjs.GlobalWorkerOptions.workerSrc = "//unpkg.com/pdfjs-dist@".concat(react_pdf_1.pdfjs.version, "/build/pdf.worker.min.js");
var PDFRenderer = function (_a) {
    var mainState = _a.mainState;
    return (react_1.default.createElement(state_1.PDFProvider, { mainState: mainState },
        react_1.default.createElement(Container, { id: "pdf-renderer", "data-testid": "pdf-renderer" },
            react_1.default.createElement(PDFControls_1.default, null),
            react_1.default.createElement(PDFPages_1.default, null))));
};
var createPDFRenderer = function (customControls, documentOverlay) {
    var customPdfRenderer = function (_a) {
        var mainState = _a.mainState;
        return (react_1.default.createElement(state_1.PDFProvider, { mainState: mainState },
            react_1.default.createElement(Container, { id: "pdf-renderer", "data-testid": "pdf-renderer" },
                react_1.default.createElement(CustomControlContainer, { customControl: customControls }),
                react_1.default.createElement(PDFPages_1.default, { documentOverlay: documentOverlay }))));
    };
    customPdfRenderer.fileTypes = ["pdf", "application/pdf"];
    customPdfRenderer.weight = 1;
    return customPdfRenderer;
};
exports.createPDFRenderer = createPDFRenderer;
var CustomControlContainer = function (_a) {
    var customControl = _a.customControl;
    var _b = (0, react_1.useContext)(state_1.PDFContext), _c = _b.state, mainState = _c.mainState, paginated = _c.paginated, zoomLevel = _c.zoomLevel, currentPage = _c.currentPage, numPages = _c.numPages, zoomJump = _c.zoomJump, defaultZoomLevel = _c.defaultZoomLevel, dispatch = _b.dispatch;
    var zoomOut = (0, react_1.useCallback)(function () {
        dispatch((0, actions_1.setZoomLevel)(zoomLevel - zoomJump));
    }, [zoomLevel, zoomJump]);
    var zoomIn = (0, react_1.useCallback)(function () {
        dispatch((0, actions_1.setZoomLevel)(zoomLevel + zoomJump));
    }, [zoomLevel, zoomJump]);
    var resetZoom = (0, react_1.useCallback)(function () {
        dispatch((0, actions_1.setZoomLevel)(defaultZoomLevel));
    }, [defaultZoomLevel]);
    var togglePaginated = (0, react_1.useCallback)(function () {
        dispatch((0, actions_1.setPDFPaginated)(!paginated));
    }, [paginated]);
    var pageNext = (0, react_1.useCallback)(function () {
        if (currentPage <= numPages) {
            dispatch((0, actions_1.setCurrentPage)(currentPage + 1));
        }
    }, [currentPage, numPages]);
    var pagePrev = (0, react_1.useCallback)(function () {
        if (currentPage > 1) {
            dispatch((0, actions_1.setCurrentPage)(currentPage - 1));
        }
    }, [currentPage, numPages]);
    return customControl({
        currentDocument: mainState === null || mainState === void 0 ? void 0 : mainState.currentDocument,
        currentPage: currentPage,
        numPages: numPages,
        zoomOut: zoomOut,
        zoomIn: zoomIn,
        resetZoom: resetZoom,
        togglePaginated: togglePaginated,
        pageNext: pageNext,
        pagePrev: pagePrev,
    });
};
exports.default = PDFRenderer;
PDFRenderer.fileTypes = ["pdf", "application/pdf"];
PDFRenderer.weight = 0;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow-y: auto;\n\n  /* width */\n  &::-webkit-scrollbar {\n    ", ";\n  }\n  /* Track */\n  &::-webkit-scrollbar-track {\n    /* background: ", "; */\n  }\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: ", ";\n  }\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow-y: auto;\n\n  /* width */\n  &::-webkit-scrollbar {\n    ", ";\n  }\n  /* Track */\n  &::-webkit-scrollbar-track {\n    /* background: ", "; */\n  }\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: ", ";\n  }\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: ", ";\n  }\n"])), function (props) {
    return props.theme.disableThemeScrollbar ? "" : "width: 10px";
}, function (props) { return props.theme.secondary; }, function (props) { return props.theme.tertiary; }, function (props) { return props.theme.primary; });
var templateObject_1;
