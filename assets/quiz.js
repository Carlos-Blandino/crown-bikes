const finish_btn = document.getElementById("finish-button");
const prev_button = document.getElementById("prev-button");
const next_button = document.getElementById("next-button");
const quiz_form = document.querySelector("#quizForm");
let currentIndex = 0;
const answers = {};

quiz_form.addEventListener("change", updateAnswers);
function updateAnswers(event) {
  //code to store answers

  console.log("answers: ", answers);
}

finish_btn.addEventListener("click", function () {
  if (answers.product_type && answers.bike_type && answers.color) {
    alert("Here are your answers: " + JSON.stringify(answers));
  } else {
    alert("Please answer all the questions!");
  }
});
next_button.addEventListener("click", function () {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
  }
});
prev_button.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
  }
});