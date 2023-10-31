export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Falls es ein e ist, hänge es Nicht an die Liste an
    if (currentElement === "e") {     
    
    } else if (currentElement === "E") {  
     
    }else {  
    result.push(currentElement) 
  }
 
  }
  return result.join("")
}
