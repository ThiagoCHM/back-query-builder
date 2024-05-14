module.exports = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'admin',
        password: 'admin',
        database: 'knexjs',
    },
});

//ALTER USER admin WITH SUPERUSER;