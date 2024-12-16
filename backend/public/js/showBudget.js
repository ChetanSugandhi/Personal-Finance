// Bar Chart with Overlay - Budgeted vs Spent Amount
const ctxOverlay = document.getElementById('budgetOverlayGraph').getContext('2d');

const budgetOverlayGraph = new Chart(ctxOverlay, {
    type: 'bar',
    data: {
        labels: ['Food', 'Travel', 'Entertainment', 'Clothes', 'Health', 'Education', 'Television'],
        datasets: [
            {
                label: 'Budgeted Amount',
                data: [1200, 1400, 800, 500, 300, 500, 300], // Budgeted data
                backgroundColor: 'rgba(56, 142, 60, 0.5)', // Semi-transparent green
                borderColor: '#388e3c',
                borderWidth: 1
            },
            {
                label: 'Spent Amount',
                data: [1100, 1280, 700, 420, 250, 350, 300], // Spent data
                backgroundColor: 'rgba(25, 118, 210, 0.5)', // Semi-transparent blue
                borderColor: '#1976d2',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleColor: '#fff',
                bodyColor: '#fff',
            },
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 200
                }
            }
        }
    }
});

// Display budget warning message at the top of the page after 5 seconds
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    body.insertAdjacentHTML('beforeend', `
        <div id="success-modal" style="
            position: fixed;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            background-color: #ff5722;
            color: white;
            padding: 15px 25px;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            font-family: Arial, sans-serif;
            font-size: 16px;
            text-align: center;
            display: none;
            z-index: 1000;
        ">
            You have spent Rs.4400, only Rs.600 is left in your budget of Rs.5000.
        </div>
    `);

    setTimeout(() => {
        const successModal = document.getElementById('success-modal');
        successModal.style.display = 'block';

        setTimeout(() => {
            successModal.style.display = 'none';
        }, 5000); // Hide the message after 5 seconds
    }, 5000);
});
