document
  .querySelector("#submit-button")
  .addEventListener("click", handleSubmit);
const boxs = document.querySelectorAll(".age-box-input");
const message = document.querySelectorAll(".age-message");
const result = document.querySelectorAll(".result");

function handleSubmit() {
  let date = new Date();
  let current_day = date.getDate();
  let current_month = date.getMonth() + 1;
  let current_year = date.getFullYear();

  var index = 0;
  var count = 0;
  for (let box of boxs) {
    if (box.value === "") {
      message[index].textContent = `This field is required`;
      box.classList.add("border-color");
    } else {
      message[index].textContent = "";
      box.classList.remove("border-color");

      if (count === 2) {
        if (
          boxs[0].value > 32 ||
          boxs[1].value > 12 ||
          boxs[2].value > current_year
        ) {
          {
            if (boxs[0].value > 32)
              message[0].textContent = "Must be a valid date";
          }
          {
            if (boxs[1].value > 12)
              message[1].textContent = "Must be a valid month";
          }
          {
            if (boxs[2].value > current_year)
              message[2].textContent = "Must be a valid year";
          }
          break;
        }

        var age_date = current_day - boxs[0].value;
        var age_month = current_month - boxs[1].value;
        var age_year = current_year - boxs[2].value;
        if (age_date < 0) {
          age_date = 30 + age_date;
          age_month = age_month - 1;
        }
        if (age_month < 0) {
          age_month = 12 + age_month;
          age_year = age_year - 1;
        }

        result[0].textContent = age_year;
        result[1].textContent = age_month;
        result[2].textContent = age_date;
      }
      count++;
    }
    index++;

    // setTimeout(()=>{
    //     message.textContent=''
    // }, 3000)
  }
}
