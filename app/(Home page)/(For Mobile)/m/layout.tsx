export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div id="MobileContainer" className="flex flex-col w-dvw min-h-dvh h-max">
			{children}
		</div>
	);
}
