const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('breed', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING
    },
    bred_for:{
      type: DataTypes.STRING,
    },
    breed_group:{
      type: DataTypes.STRING
    },
    origin:{
      type: DataTypes.STRING
    },
    image_url: {
      type: DataTypes.STRING
    },

  });
};
