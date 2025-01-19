const submitAnswer = document.getElementById("submit-answer");
const feedBack = document.getElementById("feedback");

function checkAnswer() {
  //1. Correct cnswer
  const correctAnswer = "4";

  //2. User's answer;
  let userAnswer = document.querySelector("input[name='quiz']:checked").value;

  //Comparing user's answer with the correct answer
  if (userAnswer === correctAnswer) {
    feedBack.textContent = "Correct! Well done.";
  } else {
    feedBack.textContent = "That's incorrect. Try again!";
  }
}

//4. Adding Event Listener to the submit
submitAnswer.addEventListener("click", checkAnswer);
