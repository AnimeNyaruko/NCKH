'use client';

import { useState, useEffect } from 'react';

import PC from './(Home page)/(For PC)/pagePC';
import Mobile from './(Home page)/(For Mobile)/pageMobile';

export default function Page() {
	const [content, setContent] = useState(<></>);
	useEffect(() => {
		setContent(window.matchMedia('(orientation:portrait)').matches ? <Mobile /> : <PC />);
	}, []);
	return content;
}
