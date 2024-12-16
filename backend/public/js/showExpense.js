window.onload = function() {
    const categoryAmounts = {
      Canteen: 250,
      Electricity: 1800,
      Turf: 1500,
      Charger: 150,
      Books: 800,
      Medicine: 450,
      Earbuds: 1500,
      Other: 500
    };
  
    // Categories and their amounts
    const categories = Object.keys(categoryAmounts);
    const data = categories.map(category => categoryAmounts[category]);
  
    // Initialize Bar Chart
    const barCtx = document.getElementById('spendingTrendGraph').getContext('2d');
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: categories,
        datasets: [{
          label: 'Spending Amount (₹)',
          data: data,
          backgroundColor: 'rgba(56, 142, 60, 0.5)', // Default green color
          borderColor: '#388e3c', // Darker green for border
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(46, 125, 50, 0.7)', // Darker green on hover
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Amount (₹)'
            }
          }
        },
        plugins: {
          legend: {
            display: false 
          }
        }
      }
    });
  }
  