import React, { FC, ReactElement, useContext } from "react";
import { Page } from "react-pdf";
import styled from "styled-components";
import { IStyledProps } from "../../../..";
import { useTranslation } from "../../../../hooks/useTranslation";
import { PDFContext } from "../../state";

interface Props {
  pageNum?: number;
  documentOverlay?: ReactElement;
}

const PDFSinglePage: FC<Props> = ({ pageNum, documentOverlay }) => {
  const {
    state: { mainState, paginated, zoomLevel, numPages, currentPage },
  } = useContext(PDFContext);
  const { t } = useTranslation();

  const rendererRect = mainState?.rendererRect || null;

  const _pageNum = pageNum || currentPage;

  return (
    <PageWrapper id="pdf-page-wrapper">
      {documentOverlay && (
        <div
          style={{
            zIndex: 99,
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          {documentOverlay}
        </div>
      )}
      {!paginated && (
        <PageTag id="pdf-page-info">
          {t("pdfPluginPageNumber", {
            currentPage: _pageNum,
            allPagesCount: numPages,
          })}
        </PageTag>
      )}
      <Page
        pageNumber={_pageNum || currentPage}
        scale={zoomLevel}
        height={(rendererRect?.height || 100) - 100}
        width={(rendererRect?.width || 100) - 100}
        loading={t("pdfPluginLoading")}
      />
    </PageWrapper>
  );
};

export default PDFSinglePage;

interface PageWrapperProps {}

const PageWrapper = styled.div<PageWrapperProps>`
  margin: 20px 0;
  position: relative;
`;

const PageTag = styled.div`
  padding: 0 0 10px 10px;
  color: ${(props: IStyledProps) => props.theme.textTertiary};
  font-size: 14px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
