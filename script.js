// showing the answer to a particular FAQ

function showAnswer(answerId) {
  var currentAnswer = document.getElementById(answerId);
  currentAnswer.classList.toggle("invisible");
}