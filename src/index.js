module.exports = function solveSudoku(matrix) {
  main(matrix); // ввод матрицы
  return matrix; // вывод матрицы
}

function main(matrix) {
  for (let i = 0; i < matrix.length; i++) {   // перебор элементов
    for (let j = 0; j < matrix.length; j++) { // матрицы
      if (matrix[i][j] == 0) { // если очередной элемент равен 0 то
        let line = getLine(matrix, i);      // получаем строку в которой находится элемент
        let column = getColumn(matrix, j);  // получаем столбец в которой находится элемент
        let block = getBlock(matrix, i, j); // получаем блок 3х3 в которой находится элемент
        for (let k = 1; k < 10; k++) { // K => 1-9
          if (test(block, line, column, k)) { // если K нет в строке, столбце и блоке, то
            matrix[i][j] = k; // записываем элемент
            if (main(matrix)) return true;
            console.log(matrix[i][j]);
            matrix[i][j] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function getLine(matrix, index) { // матрица, индекс строки
  let line = [];
  for (let i = 0; i < 9; i++) {
    line.push(matrix[index][i]) // пушим строку в line
  }
  return line;
}

function getColumn(matrix, index) { // матрица, индекс столбца
  let column = [];
  for (let i = 0; i < 9; i++) {
    column.push(matrix[i][index]) // пушим столбец в column
  }
  return column;
}

function getBlock(matrix, i, j) { // матрица, индекс строки, индекс столбца
  let block = [];
  for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 3; b++) {
      block.push(matrix [Math.floor(i / 3) * 3 + a] [Math.floor(j / 3) * 3 + b]); // пушим блок в block
    }
  }
  return block;
}

function test(block, line, column, k) {
  for (let i = 0; i < 9; i++) {
    if (k == block[i] || k == line[i] || k == column[i]) { // если К есть в структурае,
      return false;                                        // возвращает false
    }
  }
  return true;                                             // если К нет в структуре, возвращает true
}
