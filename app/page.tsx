'use client';

import { useState, useEffect } from 'react';

import PC from './(Home page)/(For PC)/page';
import Mobile from './(Home page)/(For Mobile)/page';

export default function Page() {
	const [content, setContent] = useState(<></>);
	useEffect(() => {
		setContent(window.matchMedia('(orientation:portrait)').matches ? <Mobile /> : <PC />);
	}, []);
	return content;
}
