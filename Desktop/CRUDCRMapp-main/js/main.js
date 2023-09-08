let workPositionFilter = document.querySelector( ".work-position-filter" );
let isMarriedFilter = document.querySelector( ".is-married-filter" );
let salarySort = document.querySelector( ".salary-per-filter" );
let workPositionSelect = document.querySelector( ".work-position-select" );
let skillPositionSelect = document.querySelector( ".skill-position-select" );
let theMainForm = document.querySelector( ".the-main-form" );
let personDataSaverBtn = document.querySelector( ".save-person-data" );
let theMainModal = document.querySelector( "#personModal" );
let theMainTableBody = document.querySelector( ".persons-table tbody" );
let openModalBtn = document.querySelector(".open-modall");
let personSearch = document.querySelector(".person-search");


// mapping data

workPositionFilter.innerHTML = `<option value="All">All postion</option>`

workPositionData.map( work => {
  workPositionFilter.innerHTML += `<option value="${work}">${work}</option>`
} );

isMarriedFilter.innerHTML = `<option value="All">All married</option>`

isMarriedData.map( is => {
  isMarriedFilter.innerHTML += `<option value="${is}">${is}</option>`
} );

workPositionData.map( work => {
  workPositionSelect.innerHTML += `<option value="${work}">${work}</option>`
} );

skillLevelData.map( skill => {
  skillPositionSelect.innerHTML += `<option value="${skill}">${skill}</option>`
} );

//taking the input data


let thePersonJson = localStorage.getItem("person");

let thePersonArr = JSON.parse(thePersonJson) || [];

let selected = null;

let search = "";

let workCategory = "All";

let marriedCategory = "All";

let salaryCategory = "All";




personDataSaverBtn.addEventListener( "click", function () {
  const checkbox = document.getElementById( 'invalidMarry' );
  let elements = theMainForm.elements;
  let thePerson = {
    firstName: elements[ 0 ].value,
    lastName: elements[ 1 ].value,
    adress: elements[ 2 ].value,
    birthDate: elements[ 3 ].value,
    workPosition: elements[ 4 ].value,
    skillPosition: elements[ 5 ].value,
    salary: elements[ 6 ].value,
    isMarried: checkbox.checked
  }

  if ( theMainForm.checkValidity() ) {
    bootstrap.Modal.getInstance( theMainModal ).hide();
    if (selected == null){
      thePersonArr.push( thePerson )
    } else{
      thePersonArr[selected] = thePerson;
    }
    localStorage.setItem("person", JSON.stringify(thePersonArr))
    addPersonData()
  } else {
    theMainForm.classList.add( "was-validated" )
  }

  // console.log( thePersonArr );
} )

////mapping the taken values

function getTbodyRow( { firstName, lastName, adress, birthDate, workPosition, skillPosition, salary, isMarried }, i ) {
  return `
   <tr>
     <th scope="row">${i + 1 }</th>
     <td>${firstName}</td>
     <td>${lastName}</td>
     <td>${adress}</td>
     <td>${birthDate}</td>
     <td>${workPosition}</td>
     <td>${skillPosition}</td>
     <td>${salary}$</td>
     <td>${isMarried ? "Ha" : "Yoq"}</td>
     <td class="text-end">
       <button onClick="editPerson(${i})" class="btn-edit btn btn-primary mr-3" data-bs-toggle="modal" data-bs-target="#personModal">Edit</button>
       <button class="btn-primary btn btn-danger" onClick="deletePersonData(${i})">Delete</button>
     </td>
   </tr>
  `
}

function addPersonData() {

  let results = thePersonArr.filter(person => person.firstName.toLowerCase().includes(search) 
    || person.lastName.toLowerCase().includes( search ));

// 
// married is done
// 
    if(workCategory !== "All"){
      console.log(workCategory);
      results = results.filter(person => person.workPosition === workCategory)
    }
    if(marriedCategory !== "All"){
      console.log(marriedCategory.toLowerCase());
      results = results.filter(person => person.isMarried.toString() == marriedCategory.toLowerCase())
    }

    if(salaryCategory !== "All"){
      if (salaryCategory == "asc") {
        results = results.sort((a, b) => a.salary - b.salary);
      } else{
        results = results.sort( ( a, b ) =>b.salary - a.salary );
      }
    }

  theMainTableBody.innerHTML = "";
  results.map( ( data, i ) => {
    theMainTableBody.innerHTML += getTbodyRow( data, i )
  } )
}



addPersonData()

function editPerson(i){
  personDataSaverBtn.textContent = "Save Person data";
  selected = i;
  let person = thePersonArr[i];
  let elements = theMainForm.elements;
  elements[0].value = person.firstName;
  elements[1].value = person.lastName;
  elements[2].value = person.adress;
  elements[3].value = person.birthDate;
  elements[4].value = person.workPosition;
  elements[5].value = person.skillPosition;
  elements[6].value = person.salary;
  elements[7].value = person.isMarried;
} 


openModalBtn.addEventListener("click",() => {
  selected = null;
  personDataSaverBtn.textContent = "Add student";
  let elements = theMainForm.elements;
  elements[ 0 ].value = "";
  elements[ 1 ].value = "";
  elements[ 2 ].value = "";
  elements[ 3 ].value = "";
  elements[ 4 ].value = "";
  elements[ 5 ].value = "";
  elements[ 6 ].value = "";
  elements[ 7 ].value = false;
})

function deletePersonData(i){
  let isDelete = confirm("Do you want to delete this person's data?") 
  if(isDelete){
    thePersonArr.splice(i, 1);
    localStorage.setItem("person", JSON.stringify(thePersonArr))
    addPersonData()
  }
}

///search



personSearch.addEventListener("keyup", function (){
  search = this.value.trim().toLowerCase();
  addPersonData()
})


///filter


workPositionFilter.addEventListener("change", function (){
  workCategory = this.value;
  addPersonData()
})

isMarriedFilter.addEventListener("change", function (){
  marriedCategory = this.value;
  addPersonData()
})
salarySort.addEventListener("change", function (){
  salaryCategory = this.value;
  // console.log(salaryCategory);
  addPersonData()
})

// i am making changes. It starts in 1 2 3 4 5 6 7 8 9  0 -  = 

////all done. congrats 1 2 3 4 5 6 7  