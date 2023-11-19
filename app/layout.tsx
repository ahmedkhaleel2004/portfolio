import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Roboto_Mono } from "next/font/google";

export const metadata: Metadata = {
	title: "Ahmed Khaleel",
	description: "Software Engineering Portfolio",
};

const roboto_mono = Roboto_Mono({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto-mono",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${roboto_mono.variable}`}>
			<body>
				<meta
					name="description"
					content="Ahmed Khaleel's portfolio, featuring projects in software development."
				/>
				<meta
					name="keywords"
					content="Python, C, C++, Engineering, Software Engineer, Full-Stack Development, Web Development, Machine Learning, Data Scientist, Student, Technology, Tech, Portfolio"
				/>
				<meta
					property="og:title"
					content="Ahmed Khaleel - Software Engineer"
				/>
				<meta
					property="og:description"
					content="Explore Ahmed Khaleel's Software Engineering Portfolio including unique projects and his timeline."
				/>
				<meta property="og:type" content="website" />
				{/*<meta
					property="og:url"
					content="https://www.johndoeportfolio.com"
				/>
				<meta
					property="og:image"
					content="https://www.johndoeportfolio.com/og-image.jpg"
				/>*/}

				{/* wrap each page in navbar and footer*/}
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
