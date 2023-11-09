function landPerimeter(arr) {
    if (!arr || arr.length === 0) {
        return "Total land perimeter: 0";
    }

    let numRows = arr.length;
    let numCols = arr[0].length;
    let totalPerimeter = 0;

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (arr[row][col] === 'X') {
                totalPerimeter += 4;

                if (row > 0 && arr[row - 1][col] === 'X') {
                    totalPerimeter--;
                }
                if (row < numRows - 1 && arr[row + 1][col] === 'X') {
                    totalPerimeter--;
                }
                if (col > 0 && arr[row][col - 1] === 'X') {
                    totalPerimeter--;
                }
                if (col < numCols - 1 && arr[row][col + 1] === 'X') {
                    totalPerimeter--;
                }
            }
        }
    }

    return totalPerimeter;
}