import { WindowControls } from "#components/index.js";
import WindowWrapper from "#hoc/WindowWrapper";
import useIsMobile from "#hooks/useIsMobile";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const isMobile = useIsMobile();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <div className="flex items-center gap-3 ml-auto">
          <button
            onClick={handlePrevPage}
            disabled={pageNumber === 1}
            className="icon disabled:opacity-50"
            title="Previous page"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-sm font-medium">
            {pageNumber} / {numPages || "..."}
          </span>
          <button
            onClick={handleNextPage}
            disabled={pageNumber === numPages}
            className="icon disabled:opacity-50"
            title="Next page"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <a
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <Document file="files/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} width={isMobile ? window.innerWidth : undefined} renderTextLayer renderAnnotationLayer />
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
