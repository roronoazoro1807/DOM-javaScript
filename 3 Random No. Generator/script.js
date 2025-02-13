const genrateBtn=document.getElementById("generate-btn");
const numberElement=document.getElementById("random-number")

genrateBtn.addEventListener("click",()=>{
  const randomNumber=Math.floor(Math.random()*100)+1;
  numberElement.textContent=randomNumber
})