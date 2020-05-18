const { Model } = require(objection);
const Knex = require('knex')

const knex = Knex({
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        // host: localhost,
        // port: 3306,
        // user: 'kris',
        // password: 'kris'
        filename: 'example.db'
    }
})

Model.knex(knex)