const Sequelize = require('sequelize')
const sequelizeInstance = new Sequelize("db", "user", "password", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      timestamps: false
    }
  });

  const db = {}

  db.sequelizeInstance = sequelizeInstance
  db.Sequelize = Sequelize
  
  module.exports = db