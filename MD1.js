document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obtener los valores de λ y μ
    const lambda = parseFloat(document.getElementById('Lambda').value);
    const mu = parseFloat(document.getElementById('Mu').value);

    // Validar los valores
    if (isNaN(lambda) || isNaN(mu) || lambda <= 0 || mu <= 0) {
        alert("Por favor, ingrese valores válidos para λ y μ.");
        return;
    }

    // Calcular P0
    const rho = lambda / mu;
    const p0 = 1 - rho;

    // Calcular Lq y L
    const lq = Math.pow(lambda, 2) / (2*mu*(mu-lambda));
    const l = rho + lq;

    // Calcular Wq y W
    const wq = lambda / (2*mu*(mu-lambda));
    const w = wq + (1 / mu);

    // Mostrar resultados en la tabla
    document.getElementById('L').textContent = l.toFixed(4);
    document.getElementById('W').textContent = w.toFixed(4);
    document.getElementById('Wq').textContent = wq.toFixed(4);
    document.getElementById('P0').textContent = p0.toFixed(4);
    document.getElementById('Lq').textContent = lq.toFixed(4);
});

