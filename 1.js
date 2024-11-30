let inputName=document.getElementById("name")
let addButton=document.getElementById("addBtn")
let tableBody=document.getElementById("tableBody")
tableBody.innerHTML=""

let submittedData=[]

let edit_index=null
addButton.addEventListener("click",(event)=>{
event.preventDefault()

let formData={
    enteredName:inputName.value,
}
if(edit_index==null){
    submittedData.push(formData)
}
else{
    submittedData.splice(edit_index,1,formData)
    edit_index=null
}
inputName.value=""
addButton.innerText="Add Task"
displayData()
})

function displayData(){
    let html=""
    submittedData.forEach(function(ele,index){
        html+=`<tr>
                  <td>${index+1}</td>
                  <td>${ele.enteredName}</td>
                  <td class="action-buttons">
                  <button class="btn btn-primary" onClick="editInfo(${index})">
  <i class="fa fa-edit"></i> 
</button>

                <button class="btn btn-danger" onClick="deleteInfo(${index})">
  <i class="fa fa-trash"></i> 
</button>

                  </td>
                </tr>`
    })
    tableBody.innerHTML=html
}

function deleteInfo(index){
    submittedData.splice(index,1)
    displayData()
}


function editInfo(index)
{
edit_index=index
inputName.value=submittedData[index].enteredName
addButton.innerText="Edit Task"
   
}