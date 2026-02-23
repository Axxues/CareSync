document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('patientsChart').getContext('2d');
    
    // Create a gradient for the line chart fill
    let gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(16, 185, 129, 0.4)'); // Emerald 500 at 40%
    gradient.addColorStop(1, 'rgba(16, 185, 129, 0.0)'); // Transparent at bottom

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'New Patients',
                data: [12, 19, 15, 25, 22, 30, 28], // Dummy Data
                borderColor: '#10b981', // Tailwind Emerald-500
                backgroundColor: gradient,
                borderWidth: 3,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#10b981',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                tension: 0.4, // Smooth, curved lines
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#0f172a',
                    titleFont: { family: 'Plus Jakarta Sans', size: 13 },
                    bodyFont: { family: 'Plus Jakarta Sans', size: 14, weight: 'bold' },
                    padding: 12,
                    cornerRadius: 8,
                    displayColors: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { borderDash: [4, 4], color: '#f1f5f9', drawBorder: false },
                    ticks: { font: { family: 'Plus Jakarta Sans' }, color: '#64748b' }
                },
                x: {
                    grid: { display: false, drawBorder: false },
                    ticks: { font: { family: 'Plus Jakarta Sans' }, color: '#64748b' }
                }
            },
            interaction: { intersect: false, mode: 'index' }
        }
    });
});

