  let todolist=[ ];
 displayElement();

function addTodo(){
    let inputElement= document.querySelector('#todoitem');
     let dateElement= document.querySelector('#tododate');
    let todoitem= inputElement.value;
     let tododate= dateElement.value;
    todolist.push({item:todoitem,duedate:tododate});
    inputElement.value='';
    dateElement.value='';
    displayElement();
}

function displayElement(){
    let displayElement= document.querySelector('.todocontainer');
    
    let newhtml='';
    for(let i=0; i<todolist.length; i++)
       
     {
         
        let{item,duedate}=todolist[i];
        newhtml+= `
          
        <span>${item}</span>
         <span>${duedate}</span>
         <button class="delete" onclick="todolist.splice(${i},1) ;
         displayElement();">Delete</button>
          
          
     `}
    displayElement.innerHTML=newhtml;
     
}
 

 