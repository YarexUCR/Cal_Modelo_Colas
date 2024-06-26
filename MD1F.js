document.getElementById("calcularBtn").addEventListener("click", function () {
  // Obtener los valores de λ, μ y N
  const lambda = parseFloat(document.getElementById("Lambda").value);
  const mu = parseFloat(document.getElementById("Mu").value);
  const N = parseInt(document.getElementById("N").value);

  // Validar los valores
  if (
    isNaN(lambda) ||
    isNaN(mu) ||
    isNaN(N) ||
    lambda <= 0 ||
    mu <= 0 ||
    N <= 0
  ) {
    alert("Por favor, ingrese valores válidos para λ, μ y N.");
    return;
  }

  // Calcular P0
  let sum = 0;
  for (let i = 0; i < N+1; i++) {
    console.log(i);
    sum += factorial(N)/factorial(N-i)*Math.pow(lambda / mu, i);
  }
  const p0 = 1 / sum;
  const rho = lambda / mu;
 
 //=B5-((B4+B3)/B4)*(1-D4)

  const lq = N-((lambda+mu)/lambda)*(1-p0);
  const l = lq+ (1-p0);

  // Calcular Wq y W
  const wq = lq/(N-l)*lambda;
  const w = wq + (1 / mu);

  // Mostrar resultados en la tabla
  document.getElementById("P0").textContent = p0.toFixed(4);
  document.getElementById("Lq").textContent = lq.toFixed(4);
  document.getElementById("L").textContent = l.toFixed(4);
  document.getElementById("Wq").textContent = wq.toFixed(4);
  document.getElementById("W").textContent = w.toFixed(4);
});
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}
