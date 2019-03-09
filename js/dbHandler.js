//Purpose of this file is this file is to add new items to the bid page and update items.

function callDataBase() {
  let bidDBJSON = JSON.parse(localStorage.getItem('bidDB'));
  console.log("bidDBJSON: "+bidDBJSON);
  return bidDBJSON;
}

function saveDataBase(db) {
  localStorage.setItem('bidDB',(JSON.stringify(db)));
  console.log("Data saved");
}

function addNewItem(obj) {
  let db = callDataBase();
  db.items.push(obj);
  saveDataBase(db);
}

function updateBid(bidid) {
  let db = callDataBase();
  for (i = 0; i<db.length; i++) {
    if (db.items[i].bidid === bidid){
      let probid = document.querySelector("#"+bidid).value;
      if (probid > db.items[i].currentBid){
        db.items[i].currentBid = probid
      }
    }
  }
}

let db = callDataBase();
document.querySelector(".itemcount").innerHTML = db.items.length;
let bidTemplate = document.querySelector("#bid-template").innerHTML;
let compiledTemplate= Handlebars.compile(bidTemplate);
document.querySelector("#bid-list-container").innerHTML = compiledTemplate(db);
