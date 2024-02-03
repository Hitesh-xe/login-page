"use strict";
const student1 = {
  student: "K.V.HITESH",
  rollno: "22JN1A0559",
  coll: 85000,
  trans: 20000,
  uni: 4500,
};
const student2 = {
  student: "CH.SAIDEEPAK",
  rollno: "22JN1A0527",
  coll: 35000,
  trans: 19000,
  uni: 4500,
  // amount: [35000, 18000, 4500],
};
const student3 = {
  student: "D.VARUN DONESH",
  rollno: "22JN1A0538",
  coll: 80000,
  trans: 18000,
  uni: 4500,
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
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const collbal = document.querySelector(".coll-balance");
const transbal = document.querySelector(".trans-balance");
const unibal = document.querySelector(".uni-balance");
const submit = document.querySelector(".sub");
const remaining = document.querySelector(".remaining");
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
console.log(typeof student1.coll);
submit.addEventListener("click", function (e) {
  const collnum = Number(input1.value);
  const transnum = Number(input2.value);
  const uninum = Number(input3.value);
  function calculate(num1, num2, num3) {
    currentuser.coll -= num1;
    currentuser.trans -= num2;
    currentuser.uni -= num3;
    collbal.textContent = currentuser.coll;
    transbal.textContent = currentuser.trans;
    unibal.textContent = currentuser.uni;
    const remain = currentuser.coll + currentuser.trans + currentuser.uni;
    remaining.textContent = remain;
  }
  calculate(collnum, transnum, uninum);
});
