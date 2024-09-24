'use strict';

import { DataTypes } from 'sequelize';

export const watch = (sequelize) => {
	return sequelize.define('watch', {
		userId: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: 'userflight'
		},

		flightId: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: 'userflight'
		}
	}, {
		tableName: 'watches',
		updatedAt: false,
		indexes: [
			{
				fields: ['createdAt'] //used for delete
			}
		]
	});
};

