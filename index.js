function dwarfRollCall(dwarves) {
  var names = ["Doc", "Dopey", "Bashful", "Grumpy"]
  let dwarfCall = []
  for (let i = 0; i < dwarves.length; i++){
    dwarfCall.push([i+1]+ '. '+ dwarves[i])
  }
  
  return dwarfCall.join(' ') + " "
}

function summonCaptainPlanet(planeteerCalls){
  let planeteer = [];
  let i = 0;
  do {
    planeteer.push(planeteerCalls[i].toUpperCase() + '!');
    i++;
  }
  while (i < planeteerCalls.length){
  }

  return planeteer
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i ++){
    if (words[i].length > 4){
    return true
    }
  }  
   return false
}

function findTheCheese (foods) {
  let cheese = ["cheddar", "gouda", "camembert"]
  for (let i = 0; i < foods.length; i ++){
    if (cheese.includes(foods[i]) === true){
      return foods[i]
    }
  }
     return "no cheese!"

}
