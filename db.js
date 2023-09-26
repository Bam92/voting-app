import sqlite3 from "sqlite3";

// create a new database file votes.db or open existing votes.db
const db = new sqlite3.Database("./votes.db", err => {
    if (err) console.error(err.message);
    console.log('Connected to the votes.db database.');
})

// close the connection with db
db.close(err => {
    if (err) console.error(err.message);
    console.log('Close the database connection.');
})

export default db