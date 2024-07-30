import { fetchBookLinks } from '@/app/lib/actions';
import { BookLink } from '@/app/lib/definations';
import SelectComponent from './SelectComponent';

export default async function LinkSelection(props: { data: BookLink }, ...prop: any[]) {
	const { data } = props;
	const { Author } = data;
	const links = (await fetchBookLinks(data)).map((e) => e.url);
	return (
		<>
			<SelectComponent url={links[0]} text={`Sách giáo khoa - ${Author}`} />
			<SelectComponent url={links[1]} text={`Giải sách giáo khoa - ${Author}`} />
			<SelectComponent url={links[2]} text={`Sách bài tập - ${Author}`} />
			<SelectComponent url={links[3]} text={`Giải sách bài tập - ${Author}`} />
		</>
	);
}
