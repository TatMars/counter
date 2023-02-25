const plusNumber = document.querySelector(".btnPlus");
const minusNumber = document.querySelector(".btnMinus");
const input = document.querySelector(".input");
const delAll = document.querySelector(".btnDelete");
const ok = document.querySelector(".btnOk");
const output = document.querySelector(".output");

let number = 0;

plusNumber.addEventListener("click", function (e) {
  number = number + 1;
  if (e.target.classList.contains("btnPlus")) input.value = number;
});

minusNumber.addEventListener("click", function (a) {
  number = number - 1;
  if (a.target.classList.contains("btnMinus")) input.value = number;
});

delAll.addEventListener("click", function () {
  if (input.value) {
    input.value = "";
  }
  if (ok) {
    output.innerHTML = "";
  }
});

ok.addEventListener("click", function () {
  let inp = input.value;
  output.innerHTML = inp;
});
