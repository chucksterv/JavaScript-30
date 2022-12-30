//TODO
//Change the event listeners with 'flags'? to set the mousemvoe only when it's clicked
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || ""; //If there is no data-sizing set it to an empty string.
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate)); //Again, no passing in the value here apparently.
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate)); //Again, no passing in the value here apparently.
