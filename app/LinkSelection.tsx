import { fetchAllAuthorLinks } from '@/app/lib/actions';
import clsx from 'clsx';
import Link from 'next/link';
import variables from '@/app/ui/Style/_defination.module.scss';
import { BookLink } from '@/app/lib/definations';

const bgCode = {
	code: variables.colorCode,
	codeOnHover: variables.colorCodeHover,
};

function BookTypeName(data: Omit<BookLink, 'Author'>) {
	let { Grade, Subject } = data;
	switch (Subject) {
		case 'Math':
			Subject = 'Toán';
			break;
		case 'Physic':
			Subject = 'Lý';
			break;
		default:
			Subject = 'Hóa';
			break;
	}
	return [
		`Sách giáo khoa ${Subject} ${Grade}`,
		`Giải sách giáo khoa ${Subject} ${Grade}`,
		`Sách bài tập ${Subject} ${Grade}`,
		`Giải sách giáo khoa ${Subject} ${Grade}`,
	];
}

const LinkSelection = async ({
	data,
	refProps,
}: {
	data: Omit<BookLink, 'Author'>;
	refProps: any;
}) => {
	if (refProps == null) return null;
	const { LinksArray, LinkText } = refProps.current;

	LinksArray.current = await fetchAllAuthorLinks(data);
	LinkText.current = BookTypeName(data);
	// await new Promise((resolve) => {
	// 	setTimeout(resolve, 15000);
	// });
	return (
		<div className={clsx('block relative left-1/2 -translate-x-1/2 w-3/4 h-auto')}>
			<div
				className={`pt-5 bg-[${bgCode.code}] grid grid-cols-[repeat(3,1fr)] grid-rows-[auto] w-full h-full rounded-b-2xl gap-y-2`}>
				{['Cánh diều', 'Chân trời sáng tạo', 'Kết nối tri thức'].map((e, i) => {
					i = i + 1;
					return (
						<div
							key={e}
							className={`border-solid border-white ${
								i == 2 && 'border-x-[1px]'
							} grid grid-cols-auto grid-rows-[max-content_repeat(2,max-content)_min-content_repeat(2,max-content)] justify-center`}>
							<div
								className={`col-start-${i} col-end-${
									i + 1
								} row-start-1 row-end-2 flex items-center justify-center`}>
								<p className="text-[25px] text-white font-bold paytone-one">{e}</p>
							</div>
							<hr className={`w- h-min col-start-${i} col-end-${i + 1} row-start-4 row-end-5`} />
							{LinksArray.current[i - 1].map((e: any, _index: number, arr: string | any[]) => {
								const index = _index + 2 >= 4 ? _index + 1 : _index;
								return (
									<div
										key={`Colum${i} - Row${index + 1}`}
										className={`col-start-${i} col-end-${i + 1} ${
											_index == 0 ? 'mt-3' : _index == arr.length - 1 ? 'mb-3' : 'my-3'
										} row-start-${index + 2} row-end-${
											index + 3
										} flex items-center justify-center`}>
										<Link href={`${e}`} className="text-[15px] text-white carlito">
											{LinkText.current[_index]}
										</Link>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default LinkSelection;
