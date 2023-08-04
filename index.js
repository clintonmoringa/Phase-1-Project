function AddEmployee(){

  let table = document.getElementById("table")
 // tr = document.getElementsById(tr)
 // th = document.getElementsByClassName(employeeId)
  //th = document.getElementsByClassName(employeeName)
  //th = document.getElementsByClassName(employeePost)
  //th = document.getElementsByClassName(employeeSalary)
 // th = document.getElementsById(Deleate)
  



  
  fetch("http://localhost:3000/Employees", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newObject)
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
  }

  

    let form = document.getElementById("postForm")
form.addEventListener("submit",function(event){
    event.preventDefault()
    AddEmployee()
    form.reset() 
})

function UpdateEmployee(id){
  let UpdatedEmpoyee = {
    employeeId: "5",
    employeeName: "Tracy Mukaba",
    employeePost: "Branch Manager",
    employeeSalary: "100000"
  }




  fetch(`http://localhost:3000/Employees/${id}`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(UpdatedEmpoyee)
    })
    .then(response=>console.log(response.status))
    .catch(error=>console.log(error))
  }


let updateButton = document.getElementById("updateButton")
updateButton.addEventListener("click",function(){
  UpdateEmployee()
})
//table.querySelector('#delete'){
//row(removedata).addEventListener("click",function ())}



//deleteButton.addEventListener("click", function(){
 // Deleat()
   
//} )
function getEmployees() {
  fetch("http://localhost:3000/Employees")
    .then((response) => response.json())
    .then((data) => displayEmployees(data))
}
getEmployees()
function displayEmployees(employees){
  let tbody =document.querySelector("tbody")
  employees.forEach(employee => {
   let row = document.createElement("tr")
   row.innerHTML=`<th>${employee.employeeId}</th>
   <td>${employee.employeeName}</td>
   <td>${employee.employeePost}</td>
   <td>${employee.employeeSalary}</td>
   

   `
   tbody.appendChild(row)
  });
}


const f = document.getElementById('SearchForm');
const q = document.getElementById('query');
const json = 'http://localhost:3000/Employees';
const site = 'pagedart.com';


function submitted(event) {
  event.preventDefault();
  const url = json + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

//f.addEventListener('submit', submitted);

let deleteButton = document.getElementById("deleteButton")
function Deleat(id){
  fetch(`http://localhost:3000/Employees/${id}`,{
      method:"DELETE"
  })
  .then(response=>console.log(response.status))
  .catch(error=>console.log(error))
}