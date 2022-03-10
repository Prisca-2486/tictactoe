//step no.1:--> Targetting all the cells in html:
let cells = document.querySelectorAll('.cell');
// console.log(cells); we get nodelist.
//step no.2--> converting node list to an array so we can loop through them:
cells = Array.from(cells);
// console.log(cells); converted to an array.


//step no.4---> for line 46.
let currentPlayer = 'X';

//step no.5 ---> to run  checkForWinner()
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//step no. 6-->
function checkForWinner(){ //looping the array of winningCombinations.
    winningCombinations.forEach(function(combination){
        let check = combination.every(idx => cells[idx].innerText.trim() == currentPlayer) // every method executes a function for each array element.
        if(check){
            highlightcells(combination);
        }
    })
}
//step Node. 7-->
function highlightcells(combination){
    combination.forEach(function(idx){
        cells[idx].classList.add('highlight');
    })
};

//step no.3---> adding click event to each cells.
cells.forEach(function(cell){
    cell.addEventListener('click', function(){
        if(cell.innerText.trim() != ''){ //trim() removes the whitespace characters from the start & end of the string....if player has already clicked on the cell then return.
            return;
        }
        cell.innerText = currentPlayer;
        checkForWinner(); //after checking winning combinations. line 12.       
        currentPlayer = currentPlayer =='X' ? 'O' : 'X'; //alternating 'X' & 'O' but when we click X on board we see O on the background. to resolve this--->line 43.
        
    })
})
