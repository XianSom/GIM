function setup() {
}

function draw() {
    
  createCanvas(windowWidth, windowHeight);
  
    let centroL = windowWidth/2
    let centroH = windowHeight/2
    let s = second()
	let m = minute()
	let h = hour()

  
  background(0);
  angleMode(DEGREES)
  
  
  //ORE
     noFill() 
     stroke(0, 0, 255)
     circle (centroL, centroH, (360/23)*h)
     
  //MINUTI
     noFill() 
     stroke(0, 255, 0)
     
     circle (centroL, centroH, 6*m)
  
  //SECONDI
     noFill()
     stroke(255, 0, 0)
     circle (centroL, centroH, 6*s)
  
  
  
     //cerchio esterno
     strokeWeight(1)     
     stroke(255)
     circle (centroL, centroH, 6.1*60)
  
     //cerchio interno, mezz'ora, mezzogiorno
     strokeWeight(0.5)     
     stroke(255)
     circle (centroL, centroH, 3*60)
  
}