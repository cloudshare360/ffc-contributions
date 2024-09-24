import { Sequelize } from 'sequelize';
import { dbConfig } from '../config/dbconfig.js';
//import { User } from '../models-ref/user.js';
//import { Product } from '../models-ref/product.js';

import { airport } from '../models/airports.js';
import { clear } from '../models/clears.js';
import { gate }  from '../models/gates.js';
import { lastMsgTime } from '../models/lastMsgTimes.js';
import { lccDesk } from '../models/lccDesks.js';
import { mute } from '../models/mutes.js';
import { read } from '../models/reads.js';
import { region } from '../models/regions.js';
import { userzone } from '../models/user_zones.js';
import { users } from '../models/users.js';
import { watch } from '../models/watches.js';
import { zone } from '../models/zones.js'





// import { Product } from '../models/zones.js';
              

// Determine environment
const env = process.env.NODE_ENV || 'local';
const config = dbConfig[env];

// Connect to the database
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
});

// Initialize models
let models = [];
 models = [ airport, gate, clear, 
            lccDesk, region, region, 
            userzone, watch, lastMsgTime,
            mute, read, users, zone
        ];
models.forEach((model) => {
    model(sequelize);
});

// Sync all models and generate schema
export const initDb = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Database & tables created!');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
};

export default sequelize;
