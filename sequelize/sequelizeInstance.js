const Sequelize = require('sequelize')
let sequelizeInstance = new Sequelize("db", "user", "password", {
    host: "db",
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

  
sequelizeInstance
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
  sequelizeInstance = new Sequelize("db", "user", "password", {
    host: "host.docker.internal",
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
}).catch(err => {
  console.error('Unable to connect to the database:', err);
  sequelizeInstance = new Sequelize("db", "user", "password", {
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
});

  const db = {}

  db.sequelizeInstance = sequelizeInstance
  db.Sequelize = Sequelize
  
  module.exports = db