// 1 represent a dandelion, 0 represent an empty cell
// 2 represent a seed
const chessboard = Array.from({length: 5}, 
    () => Array(5).fill(0));
const directions = [
    ["N", "NE", "E"],
    ["SE", "S", "SW"],
    ["W", "NW"]
]

successfulClick = false;
// Function to handle cultivate dandelion
// deal with chessboard
function clickCell(row, col) {
    while (!successfulClick) {
    // Check if the clicked cell is already filled
        if (chessboard[row][col] == 1 || chessboard[row][col] == 2) {
            console.log("Cell is already filled.");
            continue;
        }

        // Fill the clicked cell
        chessboard[row][col] = 1;
        console.log("Cell filled.");
        successfulClick = true;
    }
}   

// Function to handle blowing seed
function blowSeed(row, col) {
    // When the wind blows north, 
    // the seed will move to the north direction
    if (directions[row][col] == "N") {
        for (let i = 0; i < getEveryOne().length; i++) {
            grid = getEveryOne()[i];
            for (let j = 0; j < grid[0]; j++) {
                chessboard[j][grid[1]] = 2;
            }
        }
    }
}

//get every dandelion's position and return an array of positions
function getEachOne(m, n){
    if (m >= chessboard.length) {
        return [];
    }

    for (let i = m; i < chessboard.length; i++) {
            for (let j = (i === m ? n : 0); j < chessboard[i].length; j++) {
                if (chessboard[i][j] == 1) {
                    return [[i, j], ...getEachOne(i, ++j)];
                }
            }
        }
        return [];
    }
    

//get every dandelion's position and return an array of positions
function getEveryOne() {
    return getEachOne(0, 0);
}

//test the code
chessboard[2][2] = 1;
blowSeed(0, 0);
console.log(chessboard);