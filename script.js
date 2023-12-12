export function aufgabe01(args) {
  const input = args //liest die Eingabe der Funktion in eine Variable
  const result = [] // erstellt eine neue leere Liste

  for (let i = 0; i < input.length; i++) { //iteriert über die Eingabe (durchgeht alle Elemente einer Liste)
    const currentElement = input[i] // liest das aktuelle Zeichen der Eingabe aus.
    if (currentElement === "e") {   
      // überprüft ob das aktuelle Zeichen ein ''e'' ist  
      //Falls es ein e ist, hänge es Nicht an die Liste an
    } else if (currentElement === "E") {  
      // Falls das aktuelle Zeichen ein ''E'' ist
     
    }else {  
    result.push(currentElement) // Wenn der Fall oben nicht erfüllt ist, hänge das aktuelle Zeichen an die result-Liste hinten an.
  }
 
  }
  return result.join("") // wandelt die result-Liste in Text um, und gibt den Text zurück.
}

export function aufgabe02 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement.toUpperCase()) //die Grossbuchstabenversion von einem Text zurückgibt. Dieser Rückgabewert wird in eine neue Variable gespeichert.
  }
  return result.join("") 
}
export function aufgabe03 (args) {
  const input = args //Eingabefeld auf der Webseite
  const result = [] //Was am Ende zurückgeben wird, leere Liste wo wir Dinge anhängen, am Ende zu einem Text zusammen.
  let count = 0 //Zähler
  for (let i = 0; i < input.length; i++) {//Zeichen für Zeichen das Blatt durchgehe.
    const currentElement = input[i]//Neue Variable, was wir genau anschauen
    if (currentElement === "e") 
  {     
    count= count + 1 //Wenn es ein e liesst, dann soll der Zähler um 1 hochgehen.
    } else if (currentElement === "E") {  
     count= count + 1 // Wenn es ein E liesst soll der Zähler um 1 hochgehen 
  
  }
  }
  return count// result.join("") wäre ganze Liste zuruücksetzten, hier aber nur der Zähler (Geben an den Aufrufer zurück, jemandem melden das man e/E gefunden hat.)
}
export function aufgabe04 (args){
  const input = args
  const result = [] 
  let count = 1//Den Zähler von 1 starten, weil wen man von 0 starten würde, dann wäre ein Wort zu wenig (Immer ein Leerzeichen weniger als die Menge der Worte)
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") { 
      //Falls das aktuelle Zeichen ein Leerschlag ist 
      count = count + 1 //Zähle + 1
    }   
  }
  return count //Gebe die Anzahl der Zeichen zurück
}
export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") { 
      //Falls es ein e ist  
    result.push(3) //Ersetzte es mit einer 3
    } else {  
    result.push(currentElement) //Hängen sie auf der rechten Seite 
  }
 
  }
  return result.join("")
}
export function aufgabe05(args){
  const input = args
  const result = [] 
  let count= 0 //Von 0 starten zu zählen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === currentElement.toUpperCase()){ 
      //Falls das aktuelle Zeichen ein Grossbuchstabe ist 
    count = count + 1 //Zähle +1
  }
    }   
    if (count > 0) { 
      //Wenn das Zeichen grösser als 0 ist 
      return true //Ist die Bedingung richtig
    } else {//Sonst ist die Bedingung falsch
      return false
    }
  }

  export function aufgabe06(args){
    const input= args
    const result= []
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if(currentElement === ".") 
      //Falls das Sonderzeichen ''.'' ist die Funktion richtig
      return true 
    }
    return false //Sonst ist die Funktion falsch
  }

export function aufgabe07(args){
  const input= args
  const result= []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] //Aktuelle Zeichen, und
    if(currentElement === "u") { 
      // Falls das aktuelle Zeichen ein u ist    (Eine Auflistung, die das Wort ergibt)
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
  let len= 0 //len=Länge
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  len++ //Gleich wie len=len + 1 (Der Zähler geht für jedes einzelnze Zeichen um 1 hoch)
  }
    if(len === 6) { 
      //Wenn die Zeichenkette 6 Zeichen lang ist, stimmt die Funktion
      return true
    } 
    return false
    }
 
    export function aufgabe10(args) {
      const input= args
    if (input.length !== 7) return false 
    //Wenn das nicht der Fall ist nicht die Länge sieben hat, dann machen wir return false
    if (input[0] !== "#") return false
    //Wenn das nicht diesen ersten Hexcode ist#OAB2FF (OA= rot; B2= grün; FF= blau) dann return false 
      // Legaler Textwert
      for (let i = 1; i < input.length; i++) {
        const currentElement = input[i]
        const ascii = currentElement.charCodeAt(0) //von einer Zeichenkette rufe den ascii Wert von dem aktuellen Zeichen
        if ( 48 <= ascii && ascii <= 57){
         //wenn 48 kleiner ist als ascii Wert //ist eine Ziffer 
         //von ascii Tabelle von 0-9 schauen, hier geht es um Ziffer 
        }else if ( 65 <= ascii && ascii <=70){
          //Ist A-F
          //65-70 sind die Buchstaben in der ascii Tabelle
        }else {
          return false 
        }
      }
    return true 
    }
    export function aufgabe11(args) { 
      const input = args
      if (input.length !== 1) return null
      //Functionbar, wenn etwas grösser als eins ist, soll es abrechen.

      for (let i = 0; i < input.length; i++) {
        const currentElement = input[i]
        const ascii = currentElement.charCodeAt(0) //Gibt den ascii code vom aktuellen Zeichen zurück
        return ascii
    
      }
    
      }

      export function aufgabe12(args) {
        const input = args
        

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {     
      return i
      //Aktuelle Position, zürückgegeben, meldet das ein e gefunden worden ist.
    } 
 
  }
  return -1 //Zählt die Position hoch
}

      export function aufgabe13(args) {
        const input = args
        let pos = -1 // die letzte Position 

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {    
      pos = i //Aktuelle Position
    } 
 
  }
  return pos //Gib die Position zurück
}
export function aufgabe14(args) {
  const input = args
  let pos= -1
  let countE = 0 //Von Element E, von 0 beginnen zu zählen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {   
      countE++    //Hier hochegzählt, ++ Zählt um 1 hoch -- um 1 runterzählen
      if (countE === 3) { 
        //Wenn es bei 3.E angelangt
        pos = i //Die position des 3.E, zurückgeben
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
    if (currentElement === " ") {    
      // überprüft die Zeichen bis zum ersten Leerzeichen  
      return result.join("") //ich breche hier ab
    }
    
    result.push(currentElement) 
 
  }
  return result.join("")   
 }

 export function aufgabe16(args) {
  const text = args
let switchFirst = true //Scahlter, 1 Teil der Liste
const listFirst = [] 
const listSecond = []
for (let i = 0; i < text.length; i++) {
  if (text[i] === "$") { 
    //Falls es $ ist ($ -> trennt die erste und zweite Liste)
    switchFirst = false //Schalter umgestelt auf 2 Teil der Liste
  } else {
    if (switchFirst === true) { 
      //Wenn es in der 1 Liste ist
      listFirst.push(text[i]) //die 1 Liste pushen
    } else { //wenn es in der 2 Liste ist 
      listSecond.push(text[i]) // die 2 Liste pushen
    }
  }
}
return [listFirst.join(""), listSecond.join("")] //Gibt zwei Listen zurück
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

export function aufgabe18(args) {
  const text = args
  let switchFirst = true //Schalter, 1 Teil der Liste
  const listFirst = []//Erstellt eine Liste für den Namen
  const listSecond = []//Erstellt eine Liste für das Alter
  for (let i = 0; i < text.length; i++) { 
    if (text[i] === " ") {
      //Wenn der bis jetzt gelesene Text " "enthaltet (Trennt die 1 und 2 Liste voneinander)
      switchFirst = false //Schalter auf falsch, damit nächste Liste anfängt
   } else {
        if (switchFirst === true) { 
          listFirst.push(text[i]) // An erste Liste anhängen 
 } else { 
  listSecond.push(text[i])//Sonst bei der zweiten Liste
 }
}  
}
const name = listFirst.join("") //Join= macht es zu einer Zeichenkette
const age = listSecond.join("") // der erste Teil der Liste heist name und der zweite Teil heisst age

return "Sie heissen " + name + " und sind " + age + " Jahre alt" //Die Listen in name und age einsetzten 

}

export function aufgabe19 (args) { 
const input = args
const result = []
for (let i = 0; i < input.length; i++) { 
  const currentElement = input[i]
  result.push(currentElement)
  result.push(currentElement)//Es wird zwei mal an die Liste gehängt
   }
   return result.join("")
  }
 
  export function aufgabe20 (args) {
    const input= args
    const result= []
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if(currentElement === ".") { 
        //überprüft das aktuelle Zeichen ob es ein ''.'' hat
        if (input[i +1] === " ") {
          //i steht für Position
       
          return true 
        }
        else {return false}
      }  
    }
 return result.join("")
  
  }

export function aufgabe21 (args) {
  const input = args
  const result = []
  for (let i =input.length-1;i >=0; i-- ) { // input.length-1= Zahlrichtung umdrehen, von hinten nach vorne einlesen
    const currentElement = input[i]

    result.push(currentElement) //Die Zeichen werden in umgekehrter Reihenfolge geschrieben
   }
   return result.join("")
} 


export function bubbleSort (args) {
  const text = args
const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
for (let i = 0; i < list.length - 1; i++) {
  const currentElement = list[i]
  const nextElement = list[i + 1]
  if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
    const tmp = list[i + 1]//Temporäre (Zwischenzeitlich) Variable in der ich ein Wert speicher
    list[i + 1] = list[i]
    list[i] = tmp
    i = -1 // starte von vorne wenn etwas vertauscht wurde.
  }
}
const result = list.join("")
return result
}

export function aufgabe24 (args) { 
  const input = args
  const result = []

  if (input.length === 1) return input
  const firstElement = input [0]//input hol ich an einer gewissen Stelle, wenn ich das erste möchte Input 0
  const lastElement= input [ input.length-1]

  result.push(lastElement) 
  for (let i = 1; i < input.length - 1; i++) {
    const currentElement = input[i]
    result.push(currentElement) //Anhängen an die resultaten Liste
}
  
result. push(firstElement)

return result.join("")

}

         
      
     
