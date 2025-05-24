// .................player_one_dom...............
const Player_one_input = document.querySelector(".Player_one_input");
let Player_one_input_div = document.querySelector(".Player_one_input_div");

const Player_one_submit_button = document.querySelector(
  ".Player_one_submit_button"
);
let error = document.querySelector(".error");
let Play_again_one = document.querySelector(".Play_again_one");
let player_one_win_div = document.querySelector(".player_one_win_div");

// .................player_two_dom...............

let Player_two_input = document.querySelector(".Player_two_input");
let count = document.querySelector(".count");
let Player_two_input_div = document.querySelector(".Player_two_input_div");
let Player_two_submit_button = document.querySelector(
  ".Player_two_submit_button"
);
let player_two_win_div = document.querySelector(".player_two_win_div");
let errorTwo = document.querySelector(".errorTwo");
let Play_again_two = document.querySelector(".Play_again_two");

let initialValue = 0;
count.innerHTML = initialValue;

// .................player_one_events...............
Player_one_submit_button.addEventListener("click", () => {
  if (!Player_one_input.value) {
    error.style = "display:block";
    error.innerHTML = "Input can't be empty";
  } else if (Player_one_input.value < 0 || Player_one_input.value > 10) {
    Player_one_input.value = "";
    error.style = "display:block";
    error.innerHTML = "Input Should be from 0 to 10";
  } else {
    Player_one_input_div.style = "display:none";
    Player_two_input_div.style = "display:flex";
  }
});
Play_again_one.addEventListener("click", () => {
  location.reload();
});

// .................player_two_events...............
Player_two_submit_button.addEventListener("click", () => {
  if (!Player_two_input.value) {
    errorTwo.style = "display:block";
    errorTwo.innerHTML = "Input can't be empty";
  } else if (Player_two_input.value < 0 || Player_two_input.value > 10) {
    Player_two_input.value = "";
    errorTwo.style = "display:block";
    errorTwo.innerHTML = "Input Should be from 0 to 10";
  } else {
    const playerOneValue = Number(Player_one_input.value.trim());
    const playerTwoValue = Number(Player_two_input.value.trim());
    if (playerTwoValue == playerOneValue) {
      Player_two_input_div.style = "display:none";
      player_two_win_div.style = "display:flex";
    } else {
      initialValue++;
      count.innerHTML = initialValue;
      if (initialValue == 5) {
        Player_two_input_div.style = "display:none";
        player_one_win_div.style = "display:flex";
      } else {
        Player_two_input.value = "";
        errorTwo.style = "display:block";
        errorTwo.innerHTML = "Wrong guess. Try again";
      }
    }
  }
});

Play_again_two.addEventListener("click", () => {
  window.location.reload();
});
