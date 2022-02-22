const cardbutton = document.getElementById("cardbutton");
const paymentcard = document.getElementById("paymentcard");
const cardname = document.getElementById("cardname");
const cardnumber = document.getElementById("cardnumber");
const cardcvv = document.getElementById("cardcvv");
const cardexp = document.getElementById("cardexp");
const cardcontent = document.getElementById("cardcontent");
const savetask = document.getElementById("savetask");
const addtask = document.getElementById("addtask");
const indexsaver = document.getElementById("indexsaver");



function cardadder() {

  // console.log(cardnumber.value.toString().length);
  // console.log(cardexp.value.toString().length);
  // console.log(cardcvv.value.toString().length);


 


  if (cardname.value !== "" &&    cardnumber.value !== "" && cardnumber.value.toString().length == 12    &&  cardexp.value !== "" && cardexp.value.toString().length==4  && cardcvv !== "" &&cardcvv.value.toString().length==3 ) {

    const cardnameVal = cardname.value;
    
    const cardnumberVal = cardnumber.value;
    
    const cardexpVal = cardexp.value;
    const cardcvvVal = cardcvv.value;

    let storage = localStorage.getItem("carddetails");


    if (storage == null) {
      taskObj = [];


    }
    else {
      taskObj = JSON.parse(storage);

    }




    taskObj.push({
      "names": cardnameVal,
      "number": cardnumberVal,
      "expiry": cardexpVal,
      "cvv": cardcvvVal
    });




    localStorage.setItem("carddetails", JSON.stringify(taskObj));


    showData();
    cardname.value = "";

    cardnumber.value = "";
    cardexp.value = "";
    cardcvv.value = "";

  }



  else{
    alert("please enter valid inputs");
    console.log("amit");
  }






}

function showData() {
  let storage = localStorage.getItem("carddetails");

  if (storage == null) {
    taskObj = [];


  }
  else {
    taskObj = JSON.parse(storage);

  }

  let html = ""

  taskObj.forEach((element, index) => {
    html += `
    
    <div class="card" style="width: 40rem; height:23rem;" id="card" >
    
    <div class="card-body" style="box-shadow: 0 0 0.5 0.5 (black);" id="card-body">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
        style="position: relative;left: 45%;" onclick="cardcutter(${index})" id="cross"></button>

        <button onclick="myfun(${index})" style="position:relative; right:45%"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M17.263 2.177a1.75 1.75 0 012.474 0l2.586 2.586a1.75 1.75 0 010 2.474L19.53 10.03l-.012.013L8.69 20.378a1.75 1.75 0 01-.699.409l-5.523 1.68a.75.75 0 01-.935-.935l1.673-5.5a1.75 1.75 0 01.466-.756L14.476 4.963l2.787-2.786zm-2.275 4.371l-10.28 9.813a.25.25 0 00-.067.108l-1.264 4.154 4.177-1.271a.25.25 0 00.1-.059l10.273-9.806-2.94-2.939zM19 8.44l2.263-2.262a.25.25 0 000-.354l-2.586-2.586a.25.25 0 00-.354 0L16.061 5.5 19 8.44z"></path></svg></button>

        
        <h1 class="card-title text-center">State Bank of India</h1>
        
        <p>${element.names}</p>
        <p>${element.expiry}</p>
        <p>${element.cvv}</p>     


    </div>

</div>

`


  });
  cardcontent.innerHTML = html;



}





function cardcutter(index) {

  let storage = localStorage.getItem("carddetails");
  let taskObj = JSON.parse(storage);
  taskObj.splice(index, 1);
  localStorage.setItem("carddetails", JSON.stringify(taskObj));
  showData();

}

function myfun(index) {

  let storage = localStorage.getItem("carddetails");
  let taskObj = JSON.parse(storage);



  cardname.value = taskObj[index].names;
  cardnumber.value = taskObj[index].number;
  cardexp.value = taskObj[index].expiry
  cardcvv.value = taskObj[index].cvv;
  addtask.style.display = "none";
  savetask.style.display = "block";

  indexsaver.value = index;







}

savetask.addEventListener("click", function () {

  let storage = localStorage.getItem("carddetails");
  let taskObj = JSON.parse(storage);
  let i = document.getElementById("indexsaver").value;
  taskObj[i].names = cardname.value;
  taskObj[i].number = cardnumber.value;
  taskObj[i].expiry = cardexp.value;
  taskObj[i].cvv = cardcvv.value;
  addtask.style.display = "block";
  savetask.style.display = "none";

  localStorage.setItem("carddetails", JSON.stringify(taskObj));

  showData();



})



 function deleteall(){

  alert("all the items will be deleted");
  
    localStorage.clear();
    cardname.value = "";

    cardnumber.value = "";
    cardexp.value = "";
    cardcvv.value = "";
    showData();
  

 }



 function cardsetter(){
   let x = document.getElementById("cardnumber");
  
   if(x.value[0]=='5'){
     document.getElementById("mastercard").style.display = "block"
     
   }
   else if(x.value[0]=='4'){
    document.getElementById("visa").style.display = "block"
    
  }
 }


 

  









