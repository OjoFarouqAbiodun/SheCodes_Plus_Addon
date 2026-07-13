function displayColours(event) {
  if (event.target.value === "red") {
    alert("❤️");
  } else if (event.target.value === "blue") {
    alert("💙");
  } else if (event.target.value === "yellow") {
    alert("💛");
  }
}

let coloursSelect = document.querySelector("#colours");
coloursSelect.addEventListener("change", displayColours);
