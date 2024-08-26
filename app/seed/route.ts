import { createKysely } from '@vercel/postgres-kysely';

const db = createKysely<any>();

export async function GET() {
	// await db.schema.dropTable('posters').ifExists().execute();
	// await db.schema
	// 	.createTable('posters')
	// 	.ifNotExists()
	// 	.addColumn('title', 'text', (e) => e.notNull())
	// 	.addColumn('src', 'text', (e) => e.notNull())
	// 	.execute();
}
