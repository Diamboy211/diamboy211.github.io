var clicks = 0

function clicks() {
  clicks++
}

function updateGUI() {
  document.getElementById("clicks").textContent = clicks
}
  
  setInterval(updateGUI, 50)
