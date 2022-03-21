const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('comunidad', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
          
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: true
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      
    });
  };