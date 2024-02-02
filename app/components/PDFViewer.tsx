import React from "react";

interface PDFViewerProps {
  file: string; // URL of the PDF file
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file }) => {
  return (
    <div className="flex items-center justify-center">
      <iframe
        src={file}
        width="793"
        height="1030"
        className="min-h-screen shadow-lg"
      >
        Your browser does not support iframes.
      </iframe>
    </div>
  );
};

export default PDFViewer;
