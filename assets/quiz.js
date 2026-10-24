const finish_btn = document.getElementById("finish-button");
const prev_button = document.getElementById("prev-button");
const next_button = document.getElementById("next-button");
const quiz_form = document.getElementById("quizForm");
let currentIndex = 0;
const answers = {};
quiz_form.addEventListener("change", updateAnswers);

function updateAnswers(event) {
  let input = event.target;
  answers[input.name] = input.value;
}

finish_btn.addEventListener("click", function () {
  if (answers.product_type && answers.bike_type && answers.color) {
    alert(
      "Based on your answers " +
        JSON.stringify(answers) +
        " you would be redirected to a recommended product page",
    );
  } else {
    alert("Please answer all the questions!");
  }
});
next_button.addEventListener("click", function () {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
  }
  displayQuestion(currentIndex);
  updateButtonStates(currentIndex);
});
prev_button.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
  }
  displayQuestion(currentIndex);
  updateButtonStates(currentIndex);
});

function updateButtonStates(index) {
  prev_button.disabled = index === 0;
  next_button.classList.toggle("hidden", index === questions.length - 1);
  finish_btn.classList.toggle("hidden", index !== questions.length - 1);
}

updateButtonStates(currentIndex);
displayQuestion(currentIndex);

function displayQuestion(index) {
  let selectedAnswers = answers[questions[index].name] || "";
  let question = ` 
  <h1>${selectedAnswers}</h1>
  <h2>${index + 1}) ${questions[index].text}</h2>
    <div class="label-container">
      ${questions[index].options
        .map(
          (option) =>
            `
      <input  type="radio"  ${option.value === selectedAnswers && "checked"} 
        id="${option.value}" 
        name="${questions[index].name}" 
        value="${option.value}"
      >
    
      <label for="${option.value}">
        <div class="img-wrap">
          <img src="${option.img}">
        </div>
        <span>${option.label}</span>
      </label>
      `,
        )
        .join("")}
    </div>`;

  quizForm.innerHTML = question;
}