module.exports = (sequelize, type) => {
    return sequelize.define('question', {
      questionId: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      questionText: type.STRING,
      questionAnswer: type.STRING
    })
  }
  