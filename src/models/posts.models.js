const { DataTypes } = require('sequelize')
	

	const db = require('../utils/database')
	

	const Posts = db.define('posts', {
	    id: {
	        type: DataTypes.BIGINT,
	        autoIncrement: true,
	        primaryKey: true,
	    },
	    userName: {
	        type: DataTypes.STRING,
	        allowNull: false, //? not null
	    },
	    content: {
	        type: DataTypes.STRING,
	        allowNull: false
	    },
	    isPublished: {
	        type: DataTypes.STRING,
	        defaultValue: true
			
	    }
	})
	

	












module.exports = Posts