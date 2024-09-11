import { createKysely } from '@vercel/postgres-kysely';
import { NextResponse } from 'next/server';

const db = createKysely<any>();

export async function GET() {
	await db.schema.dropTable('posters').ifExists().execute();
	await db.schema
		.createTable('posters')
		.ifNotExists()
		.addColumn('title', 'text', (e) => e.notNull())
		.addColumn('src', 'text', (e) => e.notNull())
		.addColumn('w', 'integer', (e) => e.notNull())
		.addColumn('h', 'integer', (e) => e.notNull())
		.execute();
	return NextResponse.json('done');
}
