var clickss = 0

function clickss() {
  clickss += 1;
  document.getElementById("clickss").innerHTML = clickss
}

setInterval(clickss, 50)
