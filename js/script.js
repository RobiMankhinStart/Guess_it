const Player_one_input = document.querySelector(".Player_one_input");
const Player_one_submit_button = document.querySelector(
  ".Player_one_submit_button"
);

Player_one_submit_button.addEventListener("click", () => {
  if (!Player_one_input.value) {
    alert("input Can not be empty!");
  } else {
    if (Player_one_input.value < 0 || Player_one_input.value > 10) {
      alert("input needs to be 0 to 10");
    } else {
      console.log("ok");
    }
  }
});
