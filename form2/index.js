"use strict";
const student1 = {
  student: "K.V.HITESH",
  rollno: "22JN1A0559",
  coll: "₹ 85,000",
  trans: "₹ 20,000",
  uni: "₹ 4,500",
};
const student2 = {
  student: "CH.SAIDEEPAK",
  rollno: "22JN1A0527",
  coll: "₹ 35,000",
  trans: "₹ 19,000",
  uni: "₹ 4,500",
  // amount: [35000, 18000, 4500],
};
const student3 = {
  student: "D.VARUN DONESH",
  rollno: "22JN1A0538",
  coll: "₹ 80,000",
  trans: "₹ 18,000",
  uni: "₹ 4,500",
  // amount: [80000, 19000, 4500],
};
const students = [student1, student2, student3];
const login = document.querySelector(".login");
const roll = document.querySelector(".login-roll");
const fee = document.querySelector(".fee-box-container");
const btn = document.querySelector(".btn-log");
const cont = document.querySelector(".container");
const Name = document.querySelector(".name");
const number = document.querySelector(".number");
const college = document.querySelector(".college-fee");
const trans = document.querySelector(".trans-fee");
const uni = document.querySelector(".uni-fee");
const table = document.querySelector(".total-fee-box");
const username = function (studs) {
  studs.forEach(function (acc) {
    acc.Username = acc.student.toUpperCase();
    console.log(acc.Username);
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
// const feetotal = function (fees) {
//   total.innerHTML = "";
//   const feet = fees.split();
//   feet.forEach(function (tol, i) {
//     console.log(feet);
//     const tablecreate = ` <tr>
//     <td id="total-fee"><label class="total-fee">${tol[i]}</label></td>
//   </tr>
//   <tr>
//     <td id="total-fee"><label class="total-fee">${tol[1]}</label></td>
//   </tr>
//   <tr>
//     <td id="total-fee"><label class="total-fee"></label></td>
//   </tr>`;
//     total.insertAdjacentHTML("afterbegin", tablecreate);
//   });
// };

let currentuser;
btn.addEventListener("click", function () {
  currentuser = students.find((acc) => acc.Username === login.value);
  console.log(currentuser);
  if (currentuser?.rollno === roll.value) {
    fee.classList.remove("hidden");
    cont.style.opacity = 0;
    Name.textContent = currentuser.student;
    number.textContent = currentuser.rollnum;
    college.textContent = currentuser.coll;
    trans.textContent = currentuser.trans;
    uni.textContent = currentuser.uni;
    // feetotal(currentuser.amount);
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
