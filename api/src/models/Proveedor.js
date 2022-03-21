const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('proveedor', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
        
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    
  });
};