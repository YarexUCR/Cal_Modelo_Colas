document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obtener los valores de λ y μ
    const lambda = parseFloat(document.getElementById('Lambda').value);
    const mu = parseFloat(document.getElementById('Mu').value);

    // Validar los valores
    if (isNaN(lambda) || isNaN(mu) || lambda <= 0 || mu <= 0) {
        alert("Por favor, ingrese valores válidos para λ y μ.");
        return;
    }

    // Realizar cálculos para M/M/1
    const rho = lambda / mu;
    const p0 = 1 - rho;
    const lq = (rho * rho) / (1 - rho);
    const l = rho / (1 - rho);
    const wq = lq / lambda;
    const w = l / lambda;

    // Actualizar los resultados en la tabla
    document.getElementById('rho').textContent = rho.toFixed(4);
    document.getElementById('p0').textContent = p0.toFixed(4);
    document.getElementById('lq').textContent = lq.toFixed(4);
    document.getElementById('l').textContent = l.toFixed(4);
    document.getElementById('wq').textContent = wq.toFixed(4);
    document.getElementById('w').textContent = w.toFixed(4);
});
