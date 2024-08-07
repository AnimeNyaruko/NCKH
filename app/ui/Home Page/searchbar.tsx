import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Search({ width, height }: { width: string; height: string }) {
	return (
		<form className={`flex ${width} ${height}`}>
			<input
				placeholder="Search..."
				type="text"
				className="w-full h-full border-solid border-[1px] rounded-2xl py-2 pl-3 pr-8 border-slate-300 active:border-black select-text"
			/>
			<button className="-translate-x-[200%] relative select-none" type="submit">
				<div className="bg-sky-400 h-full aspect-square rounded-full flex items-center justify-center">
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</div>
			</button>
		</form>
	);
}
