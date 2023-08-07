function AddEmployee(formid,formdata){


//addEmployee()   
  
  //console.log(addedEmployee)
  //let table = document.getElementById("table")
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

  

    let form = document.querySelector("postForm")
//form.addEventListener("submit",function(event){
    //event.preventDefault()
    //ddEmployee()
    //form.reset() 


function UpdateEmployee(formid,formdata){
console.log(formdata,formid)
   //updatedEmployeeatedEmployee = 
    //document.createElement("tr")
   //row.innerHTML=`<th>${employee.id}</th>
   //<td>${employee.employeeName}</td>
   //<td>${employee.employeePost}</td>
   //<td>${employee.employeeSalary}</td>
  



  fetcht(`http://localhost:3000/Employees/${parseInt(formid)}`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(updatedEmployee)
    })
    .then(response=>console.log(response.status))
    .catch(error=>console.log(error))
  }


let updateButton = document.querySelector("#updateButton")
//console.log(updateButton)
updateButton.addEventListener("submit",function(e){
e.preventDefault()
//console.log(e.target)
let body={

}
e.target.querySelectorAll("input").forEach(element=>{
body[element.name]=element.value
})
//console.log(body)
UpdateEmployee(body.Id,body)
})
//table.querySelector('#delete'){
//row(removedata).addEventListener("click",function ())}




   
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
   row.innerHTML=`<th>${employee.id}</th>
   <td>${employee.employeeName}</td>
   <td>${employee.employeePost}</td>
   <td>${employee.employeeSalary}</td>
   

   `
   tbody.appendChild(row)
  });
}
form.querySelector(deleteButton),addEventListener('click',() =>{
form.remove()
DeleteEmployee(employee.id)
})


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
function DeleteEmployee(){

//f.addEventListener('submit', submitted);

let form = document.getElementById("deleteButton")

  fetch(`http://localhost:3000/Employees/${id}`,{
      method:"DELETE",
      headers: {
        "Content-Type":"application/json"
      }
  })
  .then((response) => response.json())
  .then((data) => console.log(deletedemployee))
  
  
  //let deleatedemployee =document.querySelector(tr)

  
 
    
    }
  
  
 

  

