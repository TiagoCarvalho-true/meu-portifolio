import Database from 'better-sqlite3';

const db = new Database('certificados.db', { verbose: console.log });

db.exec(`
    CREATE TABLE IF NOT EXISTS certificados (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        file TEXT NOT NULL
    )
`);

export default db;