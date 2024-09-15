'use server';

import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY!);

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
export async function POST(req: NextRequest) {
	const prompt = await req.json();

	const result = await model.generateContent(prompt);
	const response = result.response;
	let text: any = response.text();
	return NextResponse.json(text);
}
