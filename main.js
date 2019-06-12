var clicks = 0

function clicks() {
  clicks += 1
}

function updateGUI() {
  document.getElementById("clicks").textContent = clicks
}
  
setInterval(updateGUI, 50)
