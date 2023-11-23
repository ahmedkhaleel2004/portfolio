import React from "react";
import PDFViewer from "../components/PDFViewer";

const Resume: React.FC = () => {
	return (
		<div className="p-8">
			<h1 className="text-4xl mb-4">📃 My Resume</h1>
			<hr className="border-t-2 border-body-light-grey my-4" />
			<PDFViewer file="/Ahmed_Khaleel_Resume.pdf#toolbar=0" />
			<hr className="border-t-2 border-body-light-grey mt-4 mb-2" />
			<a
				href="/Ahmed_Khaleel_Resume.pdf"
				download="Ahmed_Khaleel_Resume.pdf"
				className="underline text-xl cursor-pointer transition-all duration-200 ease-in-out hover:text-nice-blue"
			>
				Download
			</a>
		</div>
	);
};

export default Resume;
