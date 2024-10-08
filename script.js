// Function to visualize Fibonacci series
function visualizeFibonacci() {
    const n = document.getElementById('terms').value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';  // Clear previous output
  
    if (n <=1) {
      outputDiv.innerHTML = 'Please enter a number greater than 1.';
      return;
    }
  
    let fib = [0, 1];
    let i = 2;
  
    outputDiv.innerHTML += `<p class="fibonacci-step">0</p>`;
    setTimeout(() => {
      outputDiv.innerHTML += `<p class="fibonacci-step">1</p>`;
    }, 1000);
  
    function displayNextStep() {
      if (i < n) {
        fib[i] = fib[i - 1] + fib[i - 2];
        outputDiv.innerHTML += `<p class="fibonacci-step">${fib[i - 2]} + ${fib[i - 1]} = ${fib[i]}</p>`;
        i++;
        setTimeout(displayNextStep, 1000); 
      }
      else{
        outputDiv.innerHTML += `<p class="fibonacci-step">Fibonacci Series : ${fib.join(', ')}</p>`
      }
    }
    setTimeout(displayNextStep, 2000);  
  }
  
  // Function to check palindrome
  function checkPalindrome() {
    const inputValue = document.getElementById('inputValue').value;
    const outputDiv = document.getElementById('output');
    if (!inputValue) {
      outputDiv.innerHTML = 'Please enter a valid string or number.';
      return;
    }
  
    const reversedValue = inputValue.split('').reverse().join('');
  
    outputDiv.innerHTML += `<p class="palindrome-step">Original: ${inputValue}</p>`;
    
    setTimeout(() => {
      outputDiv.innerHTML += `<p class="palindrome-step">Reversed: ${reversedValue}</p>`;
    }, 1000);
  
    setTimeout(() => {
      if (inputValue === reversedValue) {
        outputDiv.innerHTML += `<p class="final-result is-palindrome">It's a Palindrome!</p>`;
      } else {
        outputDiv.innerHTML += `<p class="final-result not-palindrome">It's not a Palindrome.</p>`;
      }
    }, 2000);
  }
  


  // Function to generate matrices
  function generateMatrices() {
    // Get matrix dimensions from user input
    let n = parseInt(document.getElementById('n').value);
    let m = parseInt(document.getElementById('m').value);
    let p = parseInt(document.getElementById('p').value);
  
    // Generate Matrix A (n x m)
    let matrixA = document.getElementById('matrixA');
    matrixA.innerHTML = '<h3>Matrix A (' + n + ' x ' + m + ')</h3>';
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        matrixA.innerHTML += `<input type="number" id="a${i}${j}" value="0">`;
      }
      matrixA.innerHTML += '<br>';
    }
  
    // Generate Matrix B (m x p)
    let matrixB = document.getElementById('matrixB');
    matrixB.innerHTML = '<h3>Matrix B (' + m + ' x ' + p + ')</h3>';
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < p; j++) {
        matrixB.innerHTML += `<input type="number" id="b${i}${j}" value="0">`;
      }
      matrixB.innerHTML += '<br>';
    }
  }
  
  // Function to multiply matrices
  function multiplyMatrices() {
    // Get matrix dimensions
    let n = parseInt(document.getElementById('n').value);
    let m = parseInt(document.getElementById('m').value);
    let p = parseInt(document.getElementById('p').value);
  
    // Initialize result matrix
    let resultMatrix = document.getElementById('resultMatrix');
    resultMatrix.innerHTML = '<h3>Result Matrix (' + n + ' x ' + p + ')</h3>';
  
    // Create empty result matrix
    let result = [];
    for (let i = 0; i < n; i++) {
      result[i] = [];
      for (let j = 0; j < p; j++) {
        result[i][j] = 0;
      }
    }
  
    // Multiply Matrix A and Matrix B
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < p; j++) {
        for (let k = 0; k < m; k++) {
          result[i][j] += parseFloat(document.getElementById(`a${i}${k}`).value) * parseFloat(document.getElementById(`b${k}${j}`).value);
        }
      }
    }
  
    // Display result matrix
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < p; j++) {
        resultMatrix.innerHTML += `<input type="number" value="${result[i][j]}">`;
      }
      resultMatrix.innerHTML += '<br>';
    }
  }