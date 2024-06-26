import React, { ReactElement } from "react";
import { DocRenderer, IDocument } from "../..";
declare const PDFRenderer: DocRenderer;
export declare const createPDFRenderer: (customControls: React.FC<CustomControllerProps>, documentOverlay?: ReactElement) => DocRenderer;
export interface CustomControllerProps {
    currentDocument?: IDocument;
    currentPage: number;
    numPages: number;
    zoomOut: () => void;
    zoomIn: () => void;
    resetZoom: () => void;
    togglePaginated: () => void;
    pageNext: () => void;
    pagePrev: () => void;
}
export default PDFRenderer;
