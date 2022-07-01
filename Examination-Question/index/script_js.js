function ans_display(target) {
  var x = document.getElementById(target).style;

  if (x.display === "") {
    x.display = "block";
  } else {
    x.display = "";
  }
}
