const { sequelize, Sequelize } = require("../../models/index")
const Question = require('../models/question')(sequelize, Sequelize)
const { DateTime } = require('luxon');

module.exports = {
  uploadFile: function(file) {
    console.log(file.userFile.originalFilename)
    var PromiseFtp = require('promise-ftp');
    var ftp = new PromiseFtp();
    return new Promise((resolve, reject) => {
      ftp.connect({host: "localhost", user: "user", password: "123"})
      .catch((err) => {
        reject(err)
      })
      .then(function () {
      const originalFileLocation = file.userFile.filepath
       const dt = DateTime.local();
       const fileName = dt.day + "_" + dt.month + "_" + dt.year + "_" + file.userFile.originalFilename
        console.log(fileName)
        ftp.list('/')
        .then(() => {
          console.log(fileName)
          ftp.put(originalFileLocation, fileName)
          .then(() => {
            ftp.end()
            resolve()
          })
          .catch(
            (err) => {
              reject(err);
            }
          )
        }).catch(
          (err) => {
            reject(err);
          }
        )
        });
    })
  },
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
