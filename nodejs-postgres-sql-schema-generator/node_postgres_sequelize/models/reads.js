'use strict';


import { DataTypes } from 'sequelize';

export const read = (sequelize) => {
	return sequelize.define('read', {
		userId: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: 'usermsg'
		},

		msgId: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: 'usermsg'
		}
	}, {
		tableName: 'reads',
		updatedAt: false,
		indexes: [
			{
				fields: ['createdAt'] //used for delete
			}
		]
	});
};

