CREATE TABLE questions (
    questionId serial PRIMARY KEY,
	questionText varchar(255),
    questionAnswer varchar(255)
);

INSERT INTO questions(questionText, questionAnswer)
VALUES("What is 1+1?", "2"),
("What is 1-1?", "0"),
("What is 1x1?", "1");
