document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obtener los valores de λ, μ y m
    const lambda = parseFloat(document.getElementById('Lambda').value);
    const mu = parseFloat(document.getElementById('Mu').value);
    const m = parseInt(document.getElementById('m').value);

    // Validar los valores
    if (isNaN(lambda) || isNaN(mu) || isNaN(m) || lambda <= 0 || mu <= 0 || m <= 0) {
        alert("Por favor, ingrese valores válidos para λ, μ y m.");
        return;
    }

    // Calcular el factor de utilización ρ
    const rho = lambda / (m * mu);

    // Calcular P0
    let sum = 0;
    for (let i = 0; i < m; i++) {
        sum += (Math.pow((lambda / mu), i)) / factorial(i);
    }
    const p0 = 1 / (sum + ((Math.pow((lambda / mu), m)) / (factorial(m) * (1 - rho))));
    // Calcular L
     const l =(((lambda*mu*Math.pow((lambda/mu),m))/(factorial(m-1)*Math.pow((m*mu-lambda),2)))*p0) + (lambda/mu);

    // Calcular Lq
    const lq = (Math.pow((lambda / mu), m) * rho * p0) / (factorial(m) * Math.pow((1 - rho), 2));



    // Calcular Wq
    const wq = lq / lambda;

    // Calcular W
    const w = wq + (1 / mu);

    // Mostrar resultados en la tabla
    document.getElementById('rho').textContent = rho.toFixed(4);
    document.getElementById('p0').textContent = p0.toFixed(4);
    document.getElementById('lq').textContent = lq.toFixed(4);
    document.getElementById('l').textContent = l.toFixed(4);
    document.getElementById('wq').textContent = wq.toFixed(4);
    document.getElementById('w').textContent = w.toFixed(4);
});

// Función para calcular el factorial
function factorial(n) {
    if (n === 0 || n === 1)
        return 1;
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}
