import React from "react";

interface PDFViewerProps {
	file: string; // URL of the PDF file
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file }) => {
	return (
		<div className="flex justify-center items-center">
			<iframe
				src={file}
				width="793"
				height="1030"
				className="shadow-lg min-h-screen"
			>
				Your browser does not support iframes.
			</iframe>
		</div>
	);
};

export default PDFViewer;
