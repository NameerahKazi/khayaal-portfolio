var modal2 = document.getElementById("myModal-2");

var btn = document.getElementById("myBtn-2");

var span = document.getElementsByClassName("close-2")[0];

btn.onclick = function() {
  modal2.style.display = "block";
}

span.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}