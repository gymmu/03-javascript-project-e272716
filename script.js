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

export function aufgabe02 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement.toUpperCase())
  }
  return result.join("") 
}
export function aufgabe03 (args) {
  const input = args
  const result = [] 
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Falls es ein e ist, hänge es Nicht an die Liste an
    if (currentElement === "e") {     
    count= count + 1
    } else if (currentElement === "E") {  
     count= count + 1
  
  }
  }
  return count
}
export function aufgabe04 (args) {
  const input = args
  const result = [+1] 
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Falls es ein e ist, hänge es Nicht an die Liste an
    if (currentElement === "Wort") {
      count= count + 1
    }   
  }
  return count
}