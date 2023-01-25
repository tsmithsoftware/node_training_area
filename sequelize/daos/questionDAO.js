const db = require('../sequelizeInstance')
const sequelizeInstance = db.sequelizeInstance
const Sequelize = db.Sequelize
const Question = require('../models/question')(sequelizeInstance, Sequelize)

module.exports = {
  getAllQuestions: function () {
    return new Promise((resolve, reject) => {
      Question.findAll(
        {
            attributes: ['questionText', 'questionAnswer',]
        }
      ).then(questions => {
        resolve(questions)
      }).catch(err => {
        reject(err)
      })
    })
  },
  postQuestion: function(question, answer) {
    return new Promise((resolve, reject) => {
        Question.create(
            {
              questionText: question,
              questionAnswer: answer
            })
            .then(question => {
              resolve(question.questionText + " " + answer)
            }
            )
            .catch(error => {
              reject(error)
            })
    })
  }
}