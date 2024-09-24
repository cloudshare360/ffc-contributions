export const dbConfig = {
    local: {
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    dev: {
        username: 'postgres',
        password: 'password',
        database: 'db_dev',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    si: {
        username: 'postgres',
        password: 'password',
        database: 'db_si',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    prod: {
        username: 'postgres',
        password: 'password',
        database: 'db_prod',
        host: '127.0.0.1',
        dialect: 'postgres',
    }
};
