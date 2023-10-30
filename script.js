let input = document.querySelector(".pass");
let show = document.querySelector(".show");
show.addEventListener("click", active);
function active() {
  if (input.type === "password") {
    input.type = "text";
    show.style.color = "#1da1f2"
    show.textContent ="Hide"
  }
  else{
    input.type = "password"
    show.textContent ="Show"
    show.style.color = "#111"
  }
}
