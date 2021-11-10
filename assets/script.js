
let yourName = "Justin Whistle" 

// variables
let qtyGb = document.getElementById('qty-gb')
let qtyCc = document.getElementById('qty-cc')
let qtySugar = document.getElementById('qty-sugar')
let total = document.getElementById('qty-total')
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Gingerbread Cookies
document.getElementById('add-gb').addEventListener('click', function() {
   if (gb >= 0) {
       gb++
    }
       qtyGb.textContent = gb;
       total.textContent = gb + cc + sugar;
    console.log('GB + was clicked')
})   
   
document.getElementById('minus-gb').addEventListener('click', function() {
    if(gb > 0) {
        gb--
    }
        qtyGb.textContent = gb;
        total.textContent = gb + cc + sugar;
    console.log('Gingerbread - button was clicked')
})    
// Chocalate Chip Cookies
document.getElementById('add-cc').addEventListener('click', function() {
    if (cc >= 0) {
        cc++
    }
        qtyCc.textContent = cc; 
        total.textContent = gb + cc + sugar;
    console.log('Chocolate Chip + button was clicked!')   
})

document.getElementById('minus-cc').addEventListener('click', function() {
    if (cc > 0) {
        cc--
    }
        qtyCc.textContent = cc; 
        total.textContent = gb + cc + sugar;
    console.log('Chocolate Chip - button was clicked!')
})    
// Sugar Cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    if (sugar >= 0) {
        sugar++
    }
        qtySugar.textContent = sugar;
        total.textContent = gb + cc + sugar;
    console.log('Sugar Sprinkle + button was clicked!')   
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    if (sugar > 0) {
        sugar--
    }
        qtySugar.textContent = sugar;
        total.textContent = gb + cc + sugar;
    console.log('Sugar Sprinkle - button was clicked!')
})    
   


