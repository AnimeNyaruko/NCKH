import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './ui/final.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: 'iLearn | %s',
		default: ' iLearn',
	},
	description: 'Một website dùng để học tập. Cùng với đó là vô vàn tài liệu tham khảo.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
