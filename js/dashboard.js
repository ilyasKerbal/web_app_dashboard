(function () {
    const alertBanner = document.getElementById("alert");
    alertBanner.innerHTML = `
        <div class="alert-banner">
            <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
            <p class="alert-banner-close">x</p>
        </div>`;
    alertBanner.addEventListener('click', function (e) {
        const element = e.target;
        if(element.classList.contains("alert-banner-close")){
            document.querySelector('.alert-banner').style.display = "none";
        }
    });

    var ctx3 = document.getElementById('traffic-chart').getContext('2d');
    var weeklyChart = new Chart(ctx3, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["4-7 - 4-13", "4-14 - 4-20", "4-21 - 4-27", "4-27 - 5-4"],
            datasets: [{
                backgroundColor: '#e2e3f6',
                borderColor: '#7477BF',
                data: [43, 85, 102, 93],
            }]
        },

        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            maintainAspectRatio: false
        }
    });

    var barChart = document.getElementById('daily-chart').getContext('2d');
    var myBarChart = new Chart(barChart, {
        type: 'bar',
        data: {
            labels: ["S", "M", "T", "W", "T", "F", "S"],
            datasets: [{
                backgroundColor: '#7477BF',
                borderColor: '#7477BF',
                data: [15, 19, 25, 32, 22, 30, 24],
            }]
        },
        // Configuration options go here
        options: {
            legend: {
                display: false
            }
        }
    });

    var doughnutChart = document.getElementById('mobile-users').getContext('2d');
    var myDoughnutChart = new Chart(doughnutChart, {
        type: 'doughnut',
        data: {
            labels: ["Phones", "Tablets", "Desktop"],
            datasets: [
                {
                    backgroundColor: ['#74b1bf', '#81c98f', '#7477BF'],
                    data: [15, 19, 65]
                }
            ]
        },
        options: {
            cutoutPercentage: 35,
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 13,
                    padding: 15,
                    fontColor: '#797979'
                }
            },
            animations: {
                animateScale: true
            }
        }
    });

})();