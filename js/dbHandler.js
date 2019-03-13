//Purpose of this file is this file is to add new items to the bid page and update items.

function callDataBase() {
  let bidDBJSON = JSON.parse(localStorage.getItem('bidDB'));
  console.log("bidDBJSON: "+bidDBJSON);
  return bidDBJSON;
}

function saveDataBase(db) {
  localStorage.setItem('bidDB',(JSON.stringify(db)));
  location.reload();
  console.log("Data saved");
}

function addNewItem(obj) {
  let db = callDataBase();
  db.items.push(obj);
  saveDataBase(db);
}

function updateBid(bidid) {
  let probid = document.getElementById(bidid).value;
  var errorCode = document.getElementById(bidid+"error");

  if (probid){
    //Checks if a value has been entered
    var db = callDataBase();
    let currentBid = db.items[bidid].currentBid;

    if (probid > currentBid) {
      //Checks if value is greater than current bid
      db.items[bidid].currentBid = probid;
      db.items[bidid].bidderName = "Current User";


      saveDataBase(db);
    } else {errorCode.classList.toggle("invisible");}
  } else {errorCode.classList.toggle("invisible");}
}



let db = callDataBase();
document.querySelector(".itemcount").innerHTML = db.items.length;
let bidTemplate = document.querySelector("#bid-template").innerHTML;
let compiledTemplate= Handlebars.compile(bidTemplate);
document.querySelector("#bid-list-container").innerHTML = compiledTemplate(db);
