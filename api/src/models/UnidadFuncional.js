const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('unidadfuncional', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
          
      piso: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: true
      },
      
      departamento: {
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