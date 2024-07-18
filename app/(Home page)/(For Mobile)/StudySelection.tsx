import variables from '@/app/ui/Style/_defination.module.scss';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const bgColor = {
	normal: variables.colorCode,
	hover: variables.colorCodeHover,
};

function Selector({ text }: { text: string }) {
	return (
		<div className="group flex items-center justify-between w-[80%] h-fit rounded-full bg-white opacity-75 hover:opacity-100 py-2">
			<p className={`ml-4 text-[20px] roboto`}>{text}</p>
			<FontAwesomeIcon
				className="transition-transform group-hover:rotate-180 text-white brightness-[.65] mr-4 text-[150%]"
				icon={faCaretDown}
			/>
		</div>
	);
}

export default function Study() {
	return (
		<div
			className={`grid grid-cols-1 grid-rows-3 gap-y-3 py-3 justify-items-center items-center w-screen h-fit bg-[${bgColor.normal}]`}>
			<Selector text="Lớp 10" />
			<Selector text="Lớp 11" />
			<Selector text="Lớp 12" />
		</div>
	);
}
