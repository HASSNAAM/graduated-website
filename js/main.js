//Scroll To Sections.
function scrollToSection1() {
  var section = document.getElementById("target-section1");

  window.scrollTo({
    top: 822,
    behavior: "smooth",
  });
}
function scrollToSection2() {
  var section = document.getElementById("target-section2");

  window.scrollTo({
    top: 2600,
    behavior: "smooth",
  });
}
function scrollToSection3() {
  var section = document.getElementById("target-section3");

  window.scrollTo({
    top: 4000,
    behavior: "smooth",
  });
}

//Button Scroll To Top.
let btn = document.getElementById("btn");
window.onscroll = function () {
  if (window.scrollY >= 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

//Validated Form.
function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var inputName = document.getElementById("input-name");
  var inputEmail = document.getElementById("input-email");

  var namePattern = /^[A-Za-z\s]+$/gi;
  var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

  if (!name.match(namePattern)) {
    inputName.style.display = "block";
    inputName.innerHTML = "Please enter a valid name";
    return false;
  }

  if (!email.match(emailPattern)) {
    inputEmail.style.display = "block";
    inputEmail.innerHTML = "Please enter a valid email.";
    return false;
  }
  inputEmail.style.display = "none";
  inputName.style.display = "none";

  return true;
}

var dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2023-10-01";

var timeControl = document.querySelector('input[type="time"]');
timeControl.value = "10:30";

var numControl = document.querySelector('input[type="number"]');
numControl.value = "1";
