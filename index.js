function scuberGreetingForFeet(ride){
  // Write your code here!
  // const ride = 2000;
  if (ride <= 400){
    return ("This one is on me!")
  }
  else if (ride >= 2500){
    return ("No can do.")
  }
  else if(ride >= 2000){
    return ("I will gladly take your thirty bucks.")
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  switch (city) {
    case 'NYC':
      return ('Ok, sounds good.')
    default:
      return ('No go.')
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return ('Thank you so much.');
    
    case "not as generous":
      return ('Thank you.');
  
    default:
      return ('Bye.');
  }
}