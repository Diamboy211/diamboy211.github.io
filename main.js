var clicks = [0,0,0,0,0,0,0,0,0,0,0,0,0]

function clickss() {
  for (let i = 0; i < clicks.length-1; i++) {
    clicks[i] += clicks[i+1]
  }
  clicks[clicks.length-1]++
  document.getElementById("clickss").innerHTML = clicks[0]
}
