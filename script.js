// showing the answer to a particular FAQ

function showAnswer(answerId) {
  var currentAnswer = document.getElementById(answerId);
  currentAnswer.classList.toggle("invisible");
}

//hides the woman when hovering over input tags
var formItem = document.getElementsByTagName("input");
var woman = document.getElementsByClassName("woman");

for (i = 0; i < formItem.length; i++) {
  formItem[i].addEventListener("mouseover", function () {
    woman[0].classList.add("invisible");
  });
}