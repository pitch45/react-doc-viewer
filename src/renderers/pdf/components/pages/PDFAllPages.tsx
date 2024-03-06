import React, { FC, ReactElement, useContext } from "react";
import { PDFContext } from "../../state";
import PDFSinglePage from "./PDFSinglePage";

interface Props {
  pageNum?: number;
  documentOverlay?: ReactElement;
}

export const PDFAllPages: FC<Props> = ({ documentOverlay }) => {
  const {
    state: { numPages },
  } = useContext(PDFContext);

  const PagesArray = [];
  for (let i = 0; i < numPages; i++) {
    PagesArray.push(
      <PDFSinglePage
        documentOverlay={documentOverlay}
        key={i + 1}
        pageNum={i + 1}
      />,
    );
  }

  return <>{PagesArray}</>;
};
