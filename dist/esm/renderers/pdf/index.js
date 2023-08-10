var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useCallback, useContext } from "react";
import { pdfjs } from "react-pdf";
import styled from "styled-components";
import PDFPages from "./components/pages/PDFPages";
import PDFControls from "./components/PDFControls";
import { PDFContext, PDFProvider } from "./state";
import { setPDFPaginated, setZoomLevel, setCurrentPage } from "./state/actions";
pdfjs.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@".concat(pdfjs.version, "/legacy/build/pdf.worker.min.js");
var PDFRenderer = function (_a) {
    var mainState = _a.mainState;
    return (React.createElement(PDFProvider, { mainState: mainState },
        React.createElement(Container, { id: "pdf-renderer", "data-testid": "pdf-renderer" },
            React.createElement(PDFControls, null),
            React.createElement(PDFPages, null))));
};
export var createPDFRenderer = function (customControls) {
    var customPdfRenderer = function (_a) {
        var mainState = _a.mainState;
        return (React.createElement(PDFProvider, { mainState: mainState },
            React.createElement(Container, { id: "pdf-renderer", "data-testid": "pdf-renderer" },
                React.createElement(CustomControlContainer, { customControl: customControls }),
                React.createElement(PDFPages, null))));
    };
    customPdfRenderer.fileTypes = ["pdf", "application/pdf"];
    customPdfRenderer.weight = 1;
    return customPdfRenderer;
};
var CustomControlContainer = function (_a) {
    var customControl = _a.customControl;
    var _b = useContext(PDFContext), _c = _b.state, mainState = _c.mainState, paginated = _c.paginated, zoomLevel = _c.zoomLevel, currentPage = _c.currentPage, numPages = _c.numPages, zoomJump = _c.zoomJump, defaultZoomLevel = _c.defaultZoomLevel, dispatch = _b.dispatch;
    var zoomOut = useCallback(function () {
        dispatch(setZoomLevel(zoomLevel - zoomJump));
    }, [zoomLevel, zoomJump]);
    var zoomIn = useCallback(function () {
        dispatch(setZoomLevel(zoomLevel + zoomJump));
    }, [zoomLevel, zoomJump]);
    var resetZoom = useCallback(function () {
        dispatch(setZoomLevel(defaultZoomLevel));
    }, [defaultZoomLevel]);
    var togglePaginated = useCallback(function () {
        dispatch(setPDFPaginated(!paginated));
    }, [paginated]);
    var pageNext = useCallback(function () {
        if (currentPage <= numPages) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    }, [currentPage, numPages]);
    var pagePrev = useCallback(function () {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
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
export default PDFRenderer;
PDFRenderer.fileTypes = ["pdf", "application/pdf"];
PDFRenderer.weight = 0;
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow-y: auto;\n\n  /* width */\n  &::-webkit-scrollbar {\n    ", ";\n  }\n  /* Track */\n  &::-webkit-scrollbar-track {\n    /* background: ", "; */\n  }\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: ", ";\n  }\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow-y: auto;\n\n  /* width */\n  &::-webkit-scrollbar {\n    ", ";\n  }\n  /* Track */\n  &::-webkit-scrollbar-track {\n    /* background: ", "; */\n  }\n  /* Handle */\n  &::-webkit-scrollbar-thumb {\n    background: ", ";\n  }\n  /* Handle on hover */\n  &::-webkit-scrollbar-thumb:hover {\n    background: ", ";\n  }\n"])), function (props) {
    return props.theme.disableThemeScrollbar ? "" : "width: 10px";
}, function (props) { return props.theme.secondary; }, function (props) { return props.theme.tertiary; }, function (props) { return props.theme.primary; });
var templateObject_1;
