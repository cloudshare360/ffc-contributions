'use strict';

import { DataTypes } from 'sequelize';

export const lccDesk = (sequelize) => {

	return sequelize.define('lccDesk', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'lccDesks',
		updatedAt: false,
		indexes: [
			{
				fields: ['createdAt'] //used for delete
			}
		]
	});
};

