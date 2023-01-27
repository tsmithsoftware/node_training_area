const { sequelize, Sequelize } = require("../../models/index")
const Question = require('../models/question')(sequelize, Sequelize)

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
