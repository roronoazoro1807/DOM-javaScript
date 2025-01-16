 var istatus = document.querySelector("h5")
 var btn = document.querySelector("#add")
 var check= 0

 btn.addEventListener("click", function(){
    if(check== 0){
    istatus.innerHTML ="Friends"
    istatus.style.color= " #6B8E23"
    btn.innerHTML= "Remove Friend"
    check=1;
    }
    else{
        istatus.innerHTML ="Celebrity"
    istatus.style.color= "red"
    btn.innerHTML="Add Friend"
    check=0;
    }
 })
