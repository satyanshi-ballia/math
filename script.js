let num1, num2, operator, correctAnswer;
let score = 0;

function generateQuestion() {
  const operators = ['+', '-', '*'];
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 10);
  operator = operators[Math.floor(Math.random() * operators.length)];

  if (operator === '-' && num1 < num2) {
    [num1, num2] = [num2, num1]; // prevent negative answers
  }

  correctAnswer = eval(`${num1} ${operator} ${num2}`);
  document.getElementById('question').innerText = `What is ${num1} ${operator} ${num2}?`;
  document.getElementById('answer').value = '';
  document.getElementById('feedback').innerText = '';
}

function checkAnswer() {
  const userAnswer = Number(document.getElementById('answer').value);

  if (userAnswer === correctAnswer) {
    document.getElementById('feedback').innerText = '🎉 Correct!';
    score++;
    document.getElementById('score').innerText = score;
  } else {
    document.getElementById('feedback').innerText = `❌ Oops! The right answer was ${correctAnswer}.`;
  }
}

function resetGame() {
  score = 0;
  document.getElementById('score').innerText = score;
  generateQuestion();
}

// Start with the first question
generateQuestion();
