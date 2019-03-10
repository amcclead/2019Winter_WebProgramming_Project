const starterPack= {
      "items":[
      {"createdBy":"Indy",
       "title":"Lost Arc",
       "Des":"Long lost ancient artifact.",
       "startingPrice":1,
       "currentBid":0,
       "bidderName":"Unknown",
       "helper1":"0",
       "helpererror":"0error",
       "fluff":""
     },
        {
       "createdBy":"Luke",
       "title":"Lightsaber",
       "Des":"Need some money. Being a Jedi doesn't pay much.",
       "startingPrice":1000000,
       "currentBid":5,
       "bidderName":"Han",
       "helper1":"1",
       "helpererror":"1error",
       "fluff":""
     },
        {
        "createdBy":"Stranger",
       "title":"Magic Beans",
       "Des":"Need a new cow",
       "startingPrice":10,
       "currentBid":10,
       "bidderName":"Jack",
       "helper1":"2",
       "helpererror":"2error",
       "fluff":""
     }
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
