if (typeof(Storage) !== "undefined") {
  if (localStorage.bidStarterPack){

  }

  else {
    starterPack= {
      {pos:1, createdBy:"Indy", title:"Lost Arc", Des:"Long lost ancient artifact.", startingPrice:1, currentBid:0, bidderName:""}
    }
  }
} else {
  // Sorry! No Web Storage support..
}
