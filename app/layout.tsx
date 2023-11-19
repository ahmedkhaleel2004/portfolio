import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Roboto_Mono } from "next/font/google";

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"), // CHANGE FOR PRODUCTION
	title: "Ahmed Khaleel",
	description:
		"Ahmed Khaleel's portfolio, featuring projects in software development.",
	keywords: [
		"Python",
		"C",
		"C++",
		"Engineering",
		"Software Engineer",
		"Full-Stack Development",
		"Web Development",
		"Machine Learning",
		"Data Scientist",
		"Student",
		"Technology",
		"Tech",
		"Portfolio",
	],
	authors: [{ name: "Ahmed Khaleel" }],
	openGraph: {
		type: "website",
		title: "Ahmed Khaleel - Software Engineer",
		description:
			"Explore Ahmed Khaleel's Software Engineering Portfolio including unique projects and his timeline.",
		images: [{ url: "/image.png" }], // CHANGE TO SCREENSHOT OF HOMEPAGE
	},
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
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
