'use strict';

import { DataTypes } from 'sequelize';

export const mute = (sequelize) => {
    return sequelize.define('mute', {
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'usermessage'
        },

        msgId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'usermessage'
        }
    }, {
        tableName: 'mutes',
        updatedAt: false,
        indexes: [
            {
                fields: ['createdAt']
            }
        ]
    });
};
