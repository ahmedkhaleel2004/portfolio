import React from "react";
import PDFViewer from "@/app/components/PDFViewer";

const Resume: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="mb-4 text-4xl">📃 My Resume</h1>
      <hr className="my-4 border-t-2 border-body-light-grey" />
      <PDFViewer file="/Ahmed_Khaleel_Resume.pdf#toolbar=0" />
      <hr className="mb-2 mt-4 border-t-2 border-body-light-grey" />
      <a
        href="/Ahmed_Khaleel_Resume.pdf"
        download="Ahmed_Khaleel_Resume.pdf"
        className="cursor-pointer text-xl underline transition-all duration-200 ease-in-out hover:text-nice-blue"
      >
        Download
      </a>
    </div>
  );
};

export default Resume;
