import { DB_NAME } from '@/constants/db';
import { tasks } from '@/db/schema';
import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';

const tasksDb = new Database(DB_NAME);
// export const db: BetterSQLite3Database = drizzle(tasksDb);
export const db: any = drizzle(tasksDb, { schema: { tasks } });
