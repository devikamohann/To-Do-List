const inputb=document.getElementById("input-box");
const list1=document.getElementById("list");
function addTask(){
    if(inputb.value===""){
        alert("you must write something");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputb.value;
        list1.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputb.value="";
    savedata();

    }
list1.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",list.innerHTML);

}
function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask();