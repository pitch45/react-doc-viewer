import React, { useContext } from "react";
import { PDFContext } from "../../state";
import PDFSinglePage from "./PDFSinglePage";
export var PDFAllPages = function (_a) {
    var documentOverlay = _a.documentOverlay;
    var numPages = useContext(PDFContext).state.numPages;
    var PagesArray = [];
    for (var i = 0; i < numPages; i++) {
        PagesArray.push(React.createElement(PDFSinglePage, { documentOverlay: documentOverlay, key: i + 1, pageNum: i + 1 }));
    }
    return React.createElement(React.Fragment, null, PagesArray);
};
