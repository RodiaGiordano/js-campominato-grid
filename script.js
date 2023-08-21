// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


const cellContainer = document.getElementById("wrapper");
const buttonGrid = document.getElementById('button')
const difficulty = document.getElementById('difficulty')


buttonGrid.addEventListener('click', function(){

    
    cellContainer.innerHTML = "";


    let max = parseInt(difficulty.value)

    if(!max) alert('seleziona una difficoltà')   
    
    

    
    for(let i = 1; i <= max; i++){
        
        let cell = document.createElement('div');      
        
        cell.classList.add('box');
        
        cell.setAttribute('data-index', i);
        
        cellContainer.append(cell);
        
        let cellShow = cell.getAttribute('data-index')
        
        cell.addEventListener('click', function(){
            this.classList.add('bg-primary');
            
            this.innerText = cellShow;
            
        })
    }
    
    
    
})