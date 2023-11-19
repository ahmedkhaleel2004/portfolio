import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ahmed Khaleel",
	description: "Software Engineering Portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
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
