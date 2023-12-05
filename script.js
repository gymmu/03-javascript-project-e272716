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

export function aufgabe07(args){
  const input= args
  const result= []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Aktuelle Zeichen, und
    if(currentElement === "u") {
     if (input[i+1] === "n") {
      //Das darauf u + 1 also n
      if (input[i+2] ==="d") {
        //das darauf + 2 also Un+ d= und 
        return true 
      }
    }  
  }
}
return false 

}

export function aufgabe09(args){
  const input= args
  const result= []
  let len= 0
  //len=Länge
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  len++ //Gleich wie len=len + 1
  }
    if(len === 6) {
      return true
    } 
    return false
    }
 
    export function aufgabe10(args) {
      const input= args
    if (input.length !== 7) return false
    //Wenn das nicht der Fall ist nicht die Länge sieben hat, dann machen wir return false
    if (input[0] !== "#") return false
    //Wenn das nicht diesen ersten Hexcode ist#OAB2FF, dann return false 
      // Legaler Textwert
      for (let i = 1; i < input.length; i++) {
        const currentElement = input[i]
        const ascii = currentElement.charCodeAt(0)
        //von einer Zeichenkette rufe den ascii Wert von dem aktuellen Zeichen
        if ( 48 <= ascii && ascii <= 57){
         //wenn 48 kleiner Wert kleiner ist als ascii wert ist, //ist eine Ziffer 
         //von ascii Tabelle von 0-9 schauen, hier geht es um Ziffer 
        }else if ( 65 <= ascii && ascii <=70){
          //Ist A-F
          //65-70 sind die Buchstammen in der ascii Tabelle
        }else {
          return false 
        }
      }
    return true 
    }
    export function aufgabe11(args) { 
      const input = args
      if (input.length !== 1) return null
      //Funktionbar wenn etwas grösser als eins ist soll es abrechen.

      for (let i = 0; i < input.length; i++) {
        const currentElement = input[i]
        const ascii = currentElement.charCodeAt(0) 
        return ascii
    
      }
    
      }

      export function aufgabe12(args) {
        const input = args
        

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Falls es ein e ist, hänge es Nicht an die Liste an
    if (currentElement === "e") {     
      return i
      //Aktuelle Position, zürückgegeben, meldet das ein e gefunden worden ist.
    } 
 
  }
  return -1
}

      export function aufgabe13(args) {
        const input = args
        let pos = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Falls es ein e ist, hänge es Nicht an die Liste an
    if (currentElement === "e") {     
      pos = i
      //Aktuelle Position
    } 
 
  }
  return pos
}
export function aufgabe14(args) {
  const input = args
  let pos= -1
  let countE = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Falls es ein e ist, hänge es Nicht an die Liste an
    if (currentElement === "e") {   
      countE++    //Hier hochegzählt, ++ Zählt um 1 hoch -- um 1 runterzählen
      if (countE === 3) { //Hier überprüft
        pos = i 
      }
    } 
 
  }
  return pos

}

export function aufgabe15(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Falls es ein e ist, hänge es Nicht an die Liste an
    if (currentElement === " ") {     
      return result.join("") //ich breche hier ab
    }
    
    result.push(currentElement) 
 
  }
  return result.join("")   
 }

 export function aufgabe16(args) {
  const text = args
let switchFirst = true
const listFirst = []
const listSecond = []
for (let i = 0; i < text.length; i++) {
  if (text[i] === "$") {
    switchFirst = false
  } else {
    if (switchFirst === true) {
      listFirst.push(text[i])
    } else {
      listSecond.push(text[i])
    }
  }
}
return [listFirst.join(""), listSecond.join("")]
 } 

 export function aufgabe17(args) {
  const text = args
const phrases = []
let currentPhrase = []
for (let i = 0; i < text.length; i++) {
  const currentElement = text[i]
  if (currentElement === ',') {
    // Wenn wir hier sind haben wir einen '.' gefunden, und möchten den aktuellen Satz als eine Element in phrases speichern.
    phrases.push(currentPhrase.join(""))
    currentPhrase = []  // Damit löschen wir alles was im aktuellen Satz drin war.
  } else {
    // Wenn wir keinen '.' lesen, dann möchten wir die Zeichen an den aktuellen Satz anhängen.
    currentPhrase.push(currentElement)
  }
}
phrases.push(currentPhrase.join(""))
return (phrases)
 }

 
 




         
      
     
