const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('trabajo', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    alta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    urgente: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    prioridad: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    etapas: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    horarioencargado: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    detalle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comentarios: {
      type: DataTypes.STRING,
      
    },
    imagen1: {
        type: DataTypes.STRING,
        allowNull: true,//dato no obligatorio
    },
    imagen2: {
        type: DataTypes.STRING,
        allowNull: true,//dato no obligatorio
    },
    imagen3: {
        type: DataTypes.STRING,
        allowNull: true,//dato no obligatorio
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    
  });
};