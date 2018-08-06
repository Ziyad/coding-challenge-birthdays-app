// Sets up user for MongoDB
conn = new Mongo();
db = conn.getDB("birthdays");
db.createUser(
    {
        user: "birthdays-app",
        pwd: "BzjRwuSs228M6nCc",
        roles: [{role: "dbAdmin", db: "birthdays"}]
    });