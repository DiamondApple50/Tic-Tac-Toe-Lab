let cells = document.querySelectorAll('.row > div');

let turnCounter = 0

let winner = 0

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked)
}

let winningCombos = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[6], cells[4], cells[2]]

]

let draw = 0

function checkDraw() {
        if (event.target.textContent == 'X') {
            draw++
            console.log(draw)
        }
        if (event.target.textContent == 'O') {
            draw++
            console.log(draw)
        }
        if (draw >= 9) {
            alert("It's a Draw")   
        }        
    }



function checkWin() {
for (let i = 0; i < winningCombos.length; i++) {
    let xCount = 0;
    let oCount = 0;
    for (let j = 0; j < winningCombos[i].length; j++) {
       if(winningCombos[i][j].textContent == "X") {
           xCount++
       }
        if (winningCombos[i][j].textContent == 'O') {
            oCount++
        }
    }
    

        if(xCount == 3) {
        alert("X Wins")
        }
        if (oCount == 3) {
        alert('O Wins')
        }
    }   
}


function cellClicked() {
    {
        if (event.target.textContent == '')

            if (turnCounter % 2 == 0) {
                event.target.textContent = 'X'
                turnCounter++
                checkDraw()
                checkWin()               
            } else if (turnCounter % 2 == 1) {
                event.target.textContent = 'O'
                turnCounter++
                checkDraw()
                checkWin()               
        }
    }
}






 // Failed ideas

 // if (cells[0].textContent == 'X') {
        //     if (cells[1].textContent == 'X') {
        //         if (cells[2].textContent == 'X') {
        //             alert('Player 1 is the winner')
                   
        //         }
        //     }
        // }
      
        //     if (cells[3].textContent == 'X') {
        //         if (cells[4].textContent == 'X') {
        //             if (cells[5].textContent == 'X') {
        //                 alert('Player 1 is the winner') 
                            
        //             }
        //         }
        //     }
      
        //     if (cells[6].textContent == 'X') {
        //         if (cells[7].textContent == 'X') {
        //             if (cells[8].textContent == 'X') {
        //                 alert('Player 1 is the winner')    
                                   
        //             }
        //         }
        //     }
        
        //     if (cells[0].textContent == 'O') {
        //         if (cells[1].textContent == 'O') {
        //             if (cells[2].textContent == 'O') {
        //                 alert('Player 2 is the winner')
                   
        //             }
        //         }
        //     }
     
        //     if (cells[3].textContent == 'O') {
        //         if (cells[4].textContent == 'O') {
        //             if (cells[5].textContent == 'O') {
        //                 alert('Player 2 is the winner')
             
        //             }
        //         }
        //     }
       
        //     if (cells[6].textContent == 'O') {
        //         if (cells[7].textContent == 'O') {
        //             if (cells[8].textContent == 'O') {
        //                 alert('Player 2 is the winner')
                       
        //             }
        //         }
        //     }
// } else if (cells[3] && cells[4] && cells[5].textContent == 'X') {
//             alert('Player 1 is the winner')
//             break

//         } else if (cells[6] && cells[7] && cells[8].textContent == 'X') {
//             alert('Player 1 is the winner')
//             break

//         } else if (cells[0] && cells[1] && cells[2].textContent == 'O') {
//             alert('Player 2 is the winner')
//             break

//         } else if (cells[3] && cells[4] && cells[5].textContent == 'O') {
//             alert('Player 2 is the winner')
//             break

//         } else if (cells[6] && cells[7] && cells[8].textContent == 'O') {
//             alert('Player 2 is the winner')
//             break

//         } else if (cells[0] && cells[3] && cells[6].textContent == 'O') {
//             alert('Player 2 is the winner')
//             break

//         } else if (cells[1] && cells[4] && cells[7].textContent == 'O') {
//             alert('Player 2 is the winner')
//             break

//         } else if (cells[2] && cells[5] && cells[8].textContent == 'O') {
//             alert('Player 2 is the winner')
//             break

//         } else if (cells[0] && cells[4] && cells[8].textContent == 'O') {
//             alert('Player 2 is the winner')
//             break

//         } else if (cells[2] && cells[4] && cells[6].textContent == 'O') {
//             alert('Player 2 is the winner')
//             break
//         }
//     }
// }



//  if (cells[0] && cells[1] && cells[2].textContent == 'X')
//         alert
//     }
// }


// function Clickedx() {

//     if (turnCounter % 2 == 0) {
//         for (let i = 0; i < cells.length; i++) {
//             cells[i].addEventListener('click', cellClickedx)

//         }
//         if (event.target.textContent == 'X') {
//             console.log('yes = X')
//             alert('This space is already taken!')

//         } else if (event.target.textContent == 'O') {
//             console.log('yes = O')
//             alert('This space is already taken!')

//         }
//     }
// }
// function Clickedo() {
//     if (turnCounter % 2 == 1) {
//         for (let i = 0; i < cells.length; i++) {
//             cells[i].addEventListener('click', cellClickedo)
//         }
//         if (event.target.textContent == 'X') {
//             console.log('yes = X')
//             console.log(turnCounter)
//             alert('This space is already taken!')

//         } else if (event.target.textContent == 'O') {
//             console.log('yes = O')
//             console.log(turnCounter)
//             alert('This space is already taken!')
        
//         }

//     }
// }
