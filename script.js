// // Fibonacci Series
// document.getElementById("fibonacci-button").addEventListener("click", function() {
//     const n = parseInt(document.getElementById("fibonacci-input").value);
//     const series = [];
//     let a = 0, b = 1;
//     for (let i = 0; i < n; i++) {
//         series.push(a);
//         let temp = a;
//         a = b;
//         b = temp + b;
//     }
//     document.getElementById("fibonacci-output").innerHTML = "Fibonacci Series: " + series.join(", ");
// });

// // Palindrome
// document.getElementById("palindrome-button").addEventListener("click", function() {
//     const input = document.getElementById("palindrome-input").value;
//     const reversed = input.split("").reverse().join("");
//     if (input === reversed) {
//         document.getElementById("palindrome-output").innerHTML = "Yes, it's a palindrome.";
//     } else {
//         document.getElementById("palindrome-output").innerHTML = "No, it's not a palindrome.";
//     }
// });

// // Matrix Multiplication
// document.getElementById("matrix-multiplication-button").addEventListener("click", function() {
//     const rows = parseInt(document.getElementById("matrix-multiplication-input-rows").value);
//     const columns = parseInt(document.getElementById("matrix-multiplication-input-columns").value);
//     const matrixA = [];
//     const matrixB = [];
//     for (let i = 0; i < rows; i++) {
//         matrixA[i] = [];
//         matrixB[i] = [];
//         for (let j = 0; j < columns; j++) {
//             matrixA[i][j] = Math.floor(Math.random() * 10);
//             matrixB[i][j] = Math.floor(Math.random() * 10);
//         }
//     }
//     const result = multiplyMatrices(matrixA, matrixB);
//     document.getElementById("matrix-multiplication-output").innerHTML = "Matrix A: <br>" + printMatrix(matrixA) + "<br>Matrix B: <br>" + printMatrix(matrixB) + "<br>Result: <br>" + printMatrix(result);
// });

// // Strassen Matrix Multiplication
// document.getElementById("strassen-matrix-multiplication-button").addEventListener("click", function() {
//     const rows = parseInt(document.getElementById("strassen-matrix-multiplication-input-rows").value);
//     const columns = parseInt(document.getElementById("strassen-matrix-multiplication-input-columns").value);
//     const matrixA = [];
//     const matrixB = [];
//     for (let i = 0; i < rows; i++) {
//         matrixA[i] = [];
//         matrixB[i] = [];
//         for (let j = 0; j < columns; j++) {
//             matrixA[i][j] = Math.floor(Math.random() * 10);
//             matrixB[i][j] = Math.floor(Math.random() * 10);
//         }
//     }
//     const result = strassenMultiply(matrixA, matrixB);
//     document.getElementById("strassen-matrix-multiplication-output").innerHTML = "Matrix A: <br>" + printMatrix(matrixA) + "<br>Matrix B: <br>" + printMatrix(matrixB) + "<br>Result: <br>" + printMatrix(result);
// });

// // Helper function to multiply two matrices
// function multiplyMatrices(matrixA, matrixB) {
//     const rowsA = matrixA.length;
//     const columnsA = matrixA[0].length;
//     const columnsB = matrixB[0].length;
//     const result = [];
//     for (let i = 0; i < rowsA; i++) {
//         result[i] = [];
//         for (let j = 0; j < columnsB; j++) {
//             let sum = 0;
//             for (let k = 0; k < columnsA; k++) {
//                 sum += matrixA[i][k] * matrixB[k][j];
//             }
//             result[i][j] = sum;
//         }
//     }
//     return result;
// }

// // Helper function to print a matrix
// function printMatrix(matrix) {
//     let output = "";
//     for (let i = 0; i < matrix.length; i++) {
//         output += "[";
//         for (let j = 0; j < matrix[i].length; j++) {
//             output += matrix[i][j] + " ";
//         }
//         output += "]<br>";
//     }
//     return output;
// }

// // Strassen's matrix multiplication algorithm
// function strassenMultiply(matrixA, matrixB) {
//     const rowsA = matrixA.length;
//     const columnsA = matrixA[0].length;
//     const columnsB = matrixB[0].length;
//     if (rowsA === 1 && columnsA === 1 && columnsB === 1) {
//         return [[matrixA[0][0] * matrixB[0][0]]];
//     }
//     const halfColumnsA = Math.floor(columnsA / 2);
//     const halfColumnsB = Math.floor(columnsB / 2);

//     const A11 = [];
//     const A12 = [];
//     const A21 = [];
//     const A22 = [];
//     const B11 = [];
//     const B12 = [];
//     const B21 = [];
//     const B22 = [];

//     for (let i = 0; i < halfRowsA; i++) {
//         A11[i] = [];
//         A12[i] = [];
//         A21[i] = [];
//         A22[i] = [];
//         for (let j = 0; j < halfColumnsA; j++) {
//             A11[i][j] = matrixA[i][j];
//             A12[i][j] = matrixA[i][j + halfColumnsA];
//             A21[i][j] = matrixA[i + halfRowsA][j];
//             A22[i][j] = matrixA[i + halfRowsA][j + halfColumnsA];
//         }
//     }

//     for (let i = 0; i < halfRowsA; i++) {
//         B11[i] = [];
//         B12[i] = [];
//         B21[i] = [];
//         B22[i] = [];
//         for (let j = 0; j < halfColumnsB; j++) {
//             B11[i][j] = matrixB[i][j];
//             B12[i][j] = matrixB[i][j + halfColumnsB];
//             B21[i][j] = matrixB[i + halfRowsA][j];
//             B22[i][j] = matrixB[i + halfRowsA][j + halfColumnsB];
//         }
//     }

//     const M1 = strassenMultiply(addMatrices(A11, A22), addMatrices(B11, B22));
//     const M2 = strassenMultiply(addMatrices(A21, A22), B11);
//     const M3 = strassenMultiply(A11, subtractMatrices(B12, B22));
//     const M4 = strassenMultiply(A22, subtractMatrices(B21, B11));
//     const M5 = strassenMultiply(addMatrices(A11, A12), B22);
//     const M6 = strassenMultiply(subtractMatrices(A21, A11), addMatrices(B11, B12));
//     const M7 = strassenMultiply(subtractMatrices(A12, A22), addMatrices(B21, B22));

//     const C11 = subtractMatrices(addMatrices(addMatrices(M1, M4), M5), M7);
//     const C12 = addMatrices(M3, M5);
//     const C21 = addMatrices(M2, M4);
//     const C22 = subtractMatrices(addMatrices(addMatrices(M1, M3), M6), M2);

//     const result = [];
//     for (let i = 0; i < rowsA; i++) {
//         result[i] = [];
//         for (let j = 0; j < columnsB; j++) {
//             if (i < halfRowsA && j < halfColumnsB) {
//                 result[i][j] = C11[i][j];
//             } else if (i < halfRowsA && j >= halfColumnsB) {
//                 result[i][j] = C12[i][j - halfColumnsB];
//             } else if (i >= halfRowsA && j < halfColumnsB) {
//                 result[i][j] = C21[i - halfRowsA][j];
//             } else {
//                 result[i][j] = C22[i - halfRowsA][j - halfColumnsB];
//             }
//         }
//     }

//     return result;
// }

// // Helper function to add two matrices
// function addMatrices(matrixA, matrixB) {
//     const rows = matrixA.length;
//     const columns = matrixA[0].length;
//     const result = [];
//     for (let i = 0; i < rows; i++) {
//         result[i] = [];
//         for (let j = 0; j < columns; j++) {
//             result[i][j] = matrixA[i][j] + matrixB[i][j];
//         }
//     }
//     return result;
// }

// // Helper function to subtract two matrices
// function subtractMatrices(matrixA, matrixB) {
//     const rows = matrixA.length;
//     const columns = matrixA[0].length;
//     const result = [];
//     for (let i = 0; i < rows; i++) {
//         result[i] = [];
//         for (let j = 0; j < columns; j++) {
//             result[i][j] = matrixA[i][j] - matrixB[i][j];
//         }
//     }
//     return result;
// }