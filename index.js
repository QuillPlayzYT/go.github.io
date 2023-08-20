const movingTile = document.getElementsByClassName("movingTile");
const shadowOffset = 10; // Adjust this value to control the shadow distance

movingTile.addEventListener("mousemove", (e) => {
  const xPos = e.clientX - movingTile.getBoundingClientRect().left - movingTile.offsetWidth / 2;
  const yPos = e.clientY - movingTile.getBoundingClientRect().top - movingTile.offsetHeight / 2;

  movingTile.style.transform = `translate(${xPos}px, ${yPos}px)`;
  movingTile.style.boxShadow = `${xPos / shadowOffset}px ${yPos / shadowOffset}px 10px rgba(0, 0, 0, 0.5)`;
});

movingTile.addEventListener("mouseleave", () => {
  movingTile.style.transform = "translate(0, 0)";
  movingTile.style.boxShadow = "none";
});
