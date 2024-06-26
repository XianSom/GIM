function setup() {
}

function draw() {
  
    createCanvas(windowWidth, windowHeight);

    let centroL = windowWidth/2
    let centroH = windowHeight/2

    let s = second()
	let m = minute()
	let h = hour()
    let l = 3*s/sqrt(2)
  
    background(0);
      
    angleMode(DEGREES)
  
    stroke(0)

  
  
  //ORE
     noFill() 
     strokeWeight(4)     
     stroke(255)

     circle (centroL, centroH, (360/23)*h)
  

  //MINUTI
     noFill() 
     strokeWeight(2)     
     stroke(255)
     triangle (centroL, centroH-3*m, centroL+3*m*cos(30), centroH+3*m*sin(30), centroL-3*m*cos(30), centroH+3*m*sin(30))
   
  
  //SECONDI
     noFill()
       strokeWeight(1)     
        stroke(180, 0, 0)     
     rect (centroL-l, centroH-l, l*2, l*2)
    
  
  
     //cerchio esterno
     strokeWeight(1)     
     stroke(255)
     circle (centroL, centroH, 6.1*60)
            
     //cerchio interno
     strokeWeight(0.5)     
     stroke(255)
     circle (centroL, centroH, 3*60)
  
}