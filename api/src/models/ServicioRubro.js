const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('serviciorubro', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },

    nombretrabajo: {
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