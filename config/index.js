const knexConfig = {
  client: 'pg',
  connection: {
    user: 'postgres',
    password: 'postgres',
    port: 5432,
    host: '127.0.0.1',
    database: 'synrgy7',
  }
};

module.exports = knexConfig;