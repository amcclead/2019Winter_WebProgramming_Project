//Purpose of this file is this file is to add new items to the bid page and update items. 

function callDataBase() {
  let bidDBJSON = JSON.parse(localStorage.getItem('bidDB'));
  return bidDBJSON;
}

function saveDataBase(db) {
  localStorage.setItem('bidDB',(JSON.stringify(db));
  console.log("Data saved");
}

function addNewItem(obj) {
  let db = callDataBase();
  db.items.push(obj);
  saveDataBase(db)
}
