'use strict';

import { DataTypes } from 'sequelize';

export const clear = (sequelize) => {
	return sequelize.define('clear', {
		userId: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: 'userclr'
		},

		msgId: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: 'userclr'
		}
	}, {
		tableName: 'clears',
		updatedAt: false,
		indexes: [
			{
				fields: ['createdAt'] //used for delete
			}
		]
	});
};

