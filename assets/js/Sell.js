var from1 = document.getElementById("form1");
var from2 = document.getElementById("form2");
var from3 = document.getElementById("form3");
var nextBtn1 = document.getElementById("next-btn1");
var nextBtn2 = document.getElementById("next-btn2");
var backBtn1 = document.getElementById("back-btn1");
var backBtn2 = document.getElementById("back-btn2");
var submitBtn = document.getElementById("submit-btn");
var active2 = document.getElementById("active2");
var active3 = document.getElementById("active3");

nextBtn1.addEventListener("click", function () {
  from1.style.display = "none";
  from2.style.display = "block";
  active2.classList.add("active");
});

nextBtn2.addEventListener("click", function () {
  from2.style.display = "none";
  from3.style.display = "block";
  active3.classList.add("active");
});

backBtn1.addEventListener("click", function () {
  from2.style.display = "none";
  from1.style.display = "block";
  active2.classList.remove("active");
});

backBtn2.addEventListener("click", function () {
  from3.style.display = "none";
  from2.style.display = "block";
  active3.classList.remove("active");
});
