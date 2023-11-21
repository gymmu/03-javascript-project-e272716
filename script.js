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
  //Eingabe da rein kommt, Eingabefeld auf der Webseite
  const result = [] 
  //Am Ende zuruückgeben will, leere Liste wo wir Dinge anhängen am Ende zu einem Text zusammen.
  let count = 0
  //Zähler
  for (let i = 0; i < input.length; i++) {
    //Zeichen für Zeiche das Blatt durchgehe.
    const currentElement = input[i]
    //Neue Variable, was wir genau anschauen
    if (currentElement === "e") 
    //Falls es ein e ist, hänge es Nicht an die Liste an, Übeprüfung.
  {     
    count= count + 1
    //Dann zählen sie + 1
    } else if (currentElement === "E") {  
     count= count + 1
    // Wenn es currenElement E ist +1 zählen
  
  }
  }
  return count
  //Geben an den Aufrufer zurück, jemandem melden ohne das einfach nur e aber keiner weiss wie viel. 
}
export function aufgabe04 (args){
  const input = args
  const result = [] 
  let count = 1
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Falls es ein e ist, hänge es Nicht an die Liste an
    if (currentElement === " ") {
      count = count + 1
    }   
  }
  return count
}
export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Falls es ein e ist, hänge es Nicht an die Liste an
    if (currentElement === "e") {     
    result.push(3)
    //Hängen sie auf der rechten Seite
    } else {  
    result.push(currentElement) 
  }
 
  }
  return result.join("")
}
export function aufgabe05(args){
  const input = args
  const result = [] 
  let count= 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Falls es ein e ist, hänge es Nicht an die Liste an
    if (currentElement === currentElement.toUpperCase()){
    count = count + 1 
  }
    }   
    if (count > 0) {
      return true
    } else {
      return false
    }
  }

  export function aufgabe06(args){
    const input= args
    const result= []
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if(currentElement === ".")
      return true 
    }
    return false 
  }