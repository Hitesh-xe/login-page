"use strict";
const student1 = {
  student: "K.V.HITESH",
  rollno: "22JN1A0559",
  amount: "85,000",
};
const student2 = {
  student: "CH.SAIdEEPAK",
  rollno: "22JN1A0527",
  amount: "35,000",
};
const student3 = {
  student: "D.VARUN",
  rollno: "22jN1A0538",
  amount: "80,000",
};
const students = [student1, student2, student3];
const login = document.querySelector(".login");
const roll = document.querySelector(".login-roll");
const fee = document.querySelector(".fee-box-container");
const btn = document.querySelector(".btn-log");
const cont = document.querySelector(".container");
const username = function (studs) {
  studs.forEach(function (acc) {
    acc.username = acc.student.toUpperCase();
    console.log(acc.username);
  });
};
username(students);
const rollnum = function (roll) {
  roll.forEach(function (r) {
    r.rollnum = r.rollno.toUpperCase();
    console.log(r.rollnum);
  });
};
rollnum(students);
let currentuser;
btn.addEventListener("click", function () {
  currentuser = students.find((acc) => acc.username === login.value);
  if (currentuser?.rollno === roll.value) {
    fee.classList.remove("hidden");
    cont.style.opacity = 0;
    // displayfee(currentuser);
  }
});
// const displayfee = function (stu) {
//   fee.innerHTML = " ";

//   const html = `<div class="fee-box-container hidden">
//     <h2><u>Student-Name</u> : ${currentuser}</h2>
//     <h2><u>Roll--Number</u> : ${currentuser.rollno}</h2>`;
//   fee.insertAdjacentHTML("afterbegin", html);
// };
