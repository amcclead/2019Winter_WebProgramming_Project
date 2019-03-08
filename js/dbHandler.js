//Purpose of this file is this file is to add new items to the bid page and update items. 

function callDataBase() {
  bidDBJSON = JSON.parse(localStorage.getItem('bidDB'))
  return bidDBJSON;
}

