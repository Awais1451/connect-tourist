$(function() {

 

    // chart9
    var ctx = document.getElementById('chart9').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July','Aug','Sep','Oct','Nov','Dec'],
            datasets: [{
                label: 'Facebook',
                data: [5, 10, 16, 23, 8, 14, 2,5,7,8,9,10,],
                backgroundColor: [
                    '#15ca20'
                ],
				fill: {
					target: 'origin',
					above: 'rgb(21 202 32 / 0%)',   // Area will be red above the origin
					//below: 'rgb(21 202 32 / 100%)'   // And blue below the origin
				  }, 
                tension: 0.4,
                borderColor: [
                    '#15ca20'
                ],
                borderWidth: 4
            }]
        },
        options: {
            maintainAspectRatio: false,
			barPercentage: 0.5,
		    categoryPercentage: 0.5,
            plugins: {
				legend: {
					position:'bottom',
					display: true,
				}
			},
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    
});