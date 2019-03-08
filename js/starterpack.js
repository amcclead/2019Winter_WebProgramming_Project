const starterPack= {
      items:[
      {createdBy:"Indy", 
       title:"Lost Arc", 
       Des:"Long lost ancient artifact.", 
       startingPrice:1, 
       currentBid:0, 
       bidderName:"Unknown"},
        {createdBy:"Luke", 
       title:"Lightsaber", 
       Des:"Need some money. Being a Jedi doesn't pay much.", 
       startingPrice:1000000, 
       currentBid:5, 
       bidderName:"Han"},
        {createdBy:"Stranger", 
       title:"Magic Beans", 
       Des:"Need a new cow", 
       startingPrice:10, 
       currentBid:10, 
       bidderName:"Jack"}
      ]
}

if (typeof(Storage) !== "undefined") {
  if (!localStorage.bidDB){
        //If there isn't a bid pack object in localStorage, this adds one
      stringStarterPack = JSON.stringify(starterPack);
        localStorage.setItem('bidDB', stringStarterPack);
  }

} else {
  console.log('Sorry! No Web Storage support..');
}
