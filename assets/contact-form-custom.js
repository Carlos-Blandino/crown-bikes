const businessCheckbox = document.getElementById("businessAccount");
const info = document.getElementById("companyInfo");
const reason = document.getElementById("contactReason");
const orderNumberField = document.getElementById("orderNumberField");
const productNameField = document.getElementById("productNameField");

//logic for our custom contact form
businessCheckbox.addEventListener("click", function (e) {
  if (businessCheckbox.checked == true) {
    console.log("checked");
    info.classList.remove("hidden");
  } else {
    info.classList.add("hidden");
  }
});

reason.addEventListener("change", function (e) {
  if (reason.value == "order") {
    orderNumberField.classList.remove("hidden");
  } else {
    orderNumberField.classList.add("hidden");
  }
  if (reason.value == "product") {
    productNameField.classList.remove("hidden");
  } else {
    productNameField.classList.add("hidden");
  }
});
