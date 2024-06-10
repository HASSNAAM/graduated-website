//Scroll To Sections.
function scrollToSection1() {
  let section = document.getElementById("target-section1");

  window.scrollTo({
    top: 822,
    behavior: "smooth",
  });
}
function scrollToSection2() {
  let section = document.getElementById("target-section2");

  window.scrollTo({
    top: 2600,
    behavior: "smooth",
  });
}
function scrollToSection3() {
  let section = document.getElementById("target-section3");

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
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let inputName = document.getElementById("input-name");
  let inputEmail = document.getElementById("input-email");

  let namePattern = /^[A-Za-z\s]+$/gi;
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

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

let dateControl = document.querySelector('input[type="date"]');
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateControl.value = `${year}-${month}-${day}`;

let timeControl = document.querySelector('input[type="time"]');
timeControl.value = new Date().toLocaleTimeString(undefined, {
  hour: "2-digit",
  minute: "2-digit",
});

let numControl = document.querySelector('input[type="number"]');
numControl.value = "1";
