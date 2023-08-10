import React, { ReactElement, ReactNode, useCallback, useContext } from "react";
import { pdfjs } from "react-pdf";
import styled from "styled-components";
import { DocRenderer, IDocument, IStyledProps } from "../..";
import PDFPages from "./components/pages/PDFPages";
import PDFControls from "./components/PDFControls";
import { PDFContext, PDFProvider } from "./state";
import { setPDFPaginated, setZoomLevel, setCurrentPage } from "./state/actions";
import { IMainState } from "../../store/mainStateReducer";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDFRenderer: DocRenderer = ({ mainState }) => {
  return (
    <PDFProvider mainState={mainState}>
      <Container id="pdf-renderer" data-testid="pdf-renderer">
        <PDFControls />
        <PDFPages />
      </Container>
    </PDFProvider>
  );
};

export const createPDFRenderer = (
  customControls: React.FC<CustomControllerProps>
) => {
  const customPdfRenderer: DocRenderer = ({
    mainState,
  }: {
    mainState: IMainState;
  }) => {
    return (
      <PDFProvider mainState={mainState}>
        <Container id="pdf-renderer" data-testid="pdf-renderer">
          <CustomControlContainer customControl={customControls} />
          <PDFPages />
        </Container>
      </PDFProvider>
    );
  };
  customPdfRenderer.fileTypes = ["pdf", "application/pdf"];
  customPdfRenderer.weight = 1;
  return customPdfRenderer;
};

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

const CustomControlContainer = ({
  customControl,
}: {
  customControl: React.FC<CustomControllerProps>;
}) => {
  const {
    state: {
      mainState,
      paginated,
      zoomLevel,
      currentPage,
      numPages,
      zoomJump,
      defaultZoomLevel,
    },
    dispatch,
  } = useContext(PDFContext);

  const zoomOut = useCallback(() => {
    dispatch(setZoomLevel(zoomLevel - zoomJump));
  }, [zoomLevel, zoomJump]);

  const zoomIn = useCallback(() => {
    dispatch(setZoomLevel(zoomLevel + zoomJump));
  }, [zoomLevel, zoomJump]);

  const resetZoom = useCallback(() => {
    dispatch(setZoomLevel(defaultZoomLevel));
  }, [defaultZoomLevel]);

  const togglePaginated = useCallback(() => {
    dispatch(setPDFPaginated(!paginated));
  }, [paginated]);

  const pageNext = useCallback(() => {
    if (currentPage <= numPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  }, [currentPage, numPages]);

  const pagePrev = useCallback(() => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  }, [currentPage, numPages]);

  return customControl({
    currentDocument: mainState?.currentDocument,
    currentPage,
    numPages,
    zoomOut,
    zoomIn,
    resetZoom,
    togglePaginated,
    pageNext,
    pagePrev,
  });
};

export default PDFRenderer;

PDFRenderer.fileTypes = ["pdf", "application/pdf"];
PDFRenderer.weight = 0;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;

  /* width */
  &::-webkit-scrollbar {
    ${(props: IStyledProps) => {
      return props.theme.disableThemeScrollbar ? "" : "width: 10px";
    }};
  }
  /* Track */
  &::-webkit-scrollbar-track {
    /* background: ${(props: IStyledProps) => props.theme.secondary}; */
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(props: IStyledProps) => props.theme.tertiary};
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${(props: IStyledProps) => props.theme.primary};
  }
`;
