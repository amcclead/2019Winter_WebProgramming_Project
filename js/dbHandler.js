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

  if (document.getElementById(bidid+"finder").value){
    console.log("In first if");
    var db = callDataBase();
    for (i = 0; i<db.items.length; i++) {
      console.log("In first for round: "+i);
      if (db.items[i].helper1 == bidid){
        console.log("In second if round: "+i)
        let probid = document.getElementById(bidid+"finder").value;
        if (probid > db.items[i].currentBid){
          db.items[i].currentBid = probid;
          db.items[i].bidderName = "Current User";
          if (!document.getElementById(bidid+"error").classList.contains("invisible")) {
            document.getElementById(bidid+"error").classList.toggle("invisible")
          }
          saveDataBase(db);
        } else {document.getElementById(bidid+"error").classList.toggle("invisible")}
      }
    }
  } else {document.getElementById(bidid+"error").classList.toggle("invisible")}
}

let db = callDataBase();
document.querySelector(".itemcount").innerHTML = db.items.length;
let bidTemplate = document.querySelector("#bid-template").innerHTML;
let compiledTemplate= Handlebars.compile(bidTemplate);
document.querySelector("#bid-list-container").innerHTML = compiledTemplate(db);
