var modal4 = document.getElementById("myModal-4");

var btn = document.getElementById("myBtn-4");

var span = document.getElementsByClassName("close-4")[0];

btn.onclick = function() {
  modal4.style.display = "block";
}

span.onclick = function() {
  modal4.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}