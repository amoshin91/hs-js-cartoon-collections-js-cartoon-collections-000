function dwarfRollCall(dwarves) {
  var names = ["Doc", "Dopey", "Bashful", "Grumpy"]
  let dwarfCall = []
  for (let i = 0; i < dwarves.length; i++){
    dwarfCall.push([i+1]+ '. '+ dwarves[i])
  }
  
  return dwarfCall.join(' ') + " "
}

function summonCaptainPlanet(planeteerCalls){
  let planet = [];
  let i = 0;
  
  while (i < planeteerCalls.length){
    planet.push(planeteerCalls[i].toUpperCase() + '!');
    i++;
  }

  return planet
}

function longPlaneteerCalls(words) {
  var word = false
  for (let i = 0; i < words.length; i++){
    if (words[i].length > 4){
    }
    
  return word
  }
}

function findTheCheese (foods) {
}
