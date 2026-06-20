// fill in javascript code here



let hospArr = JSON.parse(localStorage.getItem("hosp")) || [];
let delArr = JSON.parse(localStorage.getItem("del")) || [];

displayTable(hospArr);

document.querySelector("form").addEventListener("submit", getDetails);

// step -2
function getDetails(e) {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let docid = document.querySelector("#docID").value;
  let depart = document.querySelector("#dept").value;
  let  experience= document.querySelector("#exp").value;
  let email = document.querySelector("#email").value;
  let mobile = document.querySelector("#mbl").value;



   let role;

  if (experience > 5) {
    role = "Senior";
  } 
  else if (experience >= 2 && experience <= 5) {
    role = "Junior";
  } 
  else {
    role = "Trainee";
  }


  // console.log(name,priority);

  let taskObj = { name, docid , depart , experience , email, mobile,role };
  hospArr.push(taskObj);
  console.log(hospArr);

  localStorage.setItem("hosp", JSON.stringify(hospArr));


  displayTable(hospArr); // [{},{},{}...{}]
}

function displayTable(arr) {
  document.querySelector("tbody").innerText = "";
  arr.forEach((el,i) => {
    const row = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = el.name;

    const td2 = document.createElement("td");
    td2.innerText = el.docid;

    const td3 = document.createElement("td");
    td3.innerText = el.depart;

    const td4 = document.createElement("td");
    td4.innerText = el.experience;

    const td5 = document.createElement("td");
    td5.innerText = el.email;

    const td6 = document.createElement("td");
    td6.innerText = el.mobile;

    const td7 = document.createElement("td");
    td7.innerText = el.role;

    const td8 = document.createElement("button");
    td8.innerText = "Delete";

    td8.addEventListener("click", function () {
        
        
        hospArr.splice(i, 1)
        localStorage.setItem("hosp", JSON.stringify(hospArr));
        alert("Row deleted");
        displayTable(hospArr);
        });

    row.append(td1, td2, td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(row);
  });
}