// Update with your config settings.

module.exports = {

  // local environment
  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : process.env.USER,
      database : process.env.DATABASE_NAME
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },

  // staging environment
  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // live environment
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
    // connection: {
    //   database: 'my_db',
    //   user:     'username',
    //   password: 'password'
    // },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },
};
