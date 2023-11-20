import React from "react";

interface PDFViewerProps {
	file: string; // URL of the PDF file
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file }) => {
	return (
		<div className="flex justify-center items-center">
			<iframe
				src={file}
				width="793" // A4 width in pixels at 96 DPI
				height="1030" // A4 height in pixels at 96 DPI
				className="shadow-lg min-h-screen"
			>
				Your browser does not support iframes.
			</iframe>
		</div>
	);
};

export default PDFViewer;
