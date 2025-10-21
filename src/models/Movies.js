const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Movies =  sequelize.define('Movies', {
    title :{
        type: DataTypes.STRING,
        allowNull:false,
    },
    synopsis :{
        type: DataTypes.STRING,
        allowNull:false,
    },
    posterUrl:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    trailerUrl:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    genre :{
        type: DataTypes.STRING,
        allowNull:false,
    },
    duration :{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    ageRating :{
        type: DataTypes.FLOAT,
        allowNull:false,
    },
    releaseDate :{
        type: DataTypes.STRING,
        allowNull:false,
    },
    isActive:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
})

module.exports = Movies;