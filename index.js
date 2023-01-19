$("#language").on("click", function() {
  if ($(this).attr("src") === "images/US-UK_Flag.svg") {
    $(this).attr("src", "images/mexico.svg");
  } else if ($(this).attr("src") === "images/mexico.svg") {
    $(this).attr("src", "images/US-UK_Flag.svg");
  }
});

//URL for social media

$(".fb").on("click", function() {
  window.open("https://www.facebook.com/daniel.aveces/");
});

$(".twitter").on("click", function() {
  window.open("https://twitter.com/Daniel_Acvs");
});

$(".linkedin").on("click", function() {
  window.open("https://www.linkedin.com/in/juandanielaceves/");
});

$(".github").on("click", function() {
  window.open("https://github.com/DanielAveces");
});

$("#xmass").on("click", function() {
  window.open("https://danielaveces.github.io/Xmas-Countdown/");
});
