module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'bob'),
        username: env('DATABASE_USERNAME', 'bob'),
        password: env('DATABASE_PASSWORD', 'bob'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not Required
        ssl: env('DATABASE_SSL', false),
      },
      options: {},
    },
  },
});
