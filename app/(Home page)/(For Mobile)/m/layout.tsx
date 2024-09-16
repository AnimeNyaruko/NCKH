import bg from '@/public/images/background.png';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div
			style={{
				backgroundImage: `url(${bg.src})`,
			}}
			id="MobileContainer"
			className="flex flex-col w-dvw min-h-dvh h-max">
			{children}
		</div>
	);
}
