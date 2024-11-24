const pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: 'nastyad20',
    host: "localhost",
    port: 5432,
    database: "areal_hr_test_db"
});
module.exports = pool;
