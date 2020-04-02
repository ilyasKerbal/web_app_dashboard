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

    var data = {
        // A labels array that can contain any sort of values
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        // Our series array that contains series objects or in this case series data arrays
        series: [
            [1, 2, 4, 2, 5, 9, 12]
        ]
    };

    new Chartist.Line('#chart1', data);

    new Chartist.Bar('#chart2', {
        labels: [1, 2, 3, 4],
        series: [[5, 2, 8, 3]]
    });

    new Chartist.Pie('#chart3', {
        labels:["Android", "IOS", "Others"],
        series: [{
            value: 60,
            name: 'Series 1',
            meta: 'Meta One'
        }, {
            value: 30,
            name: 'Series 2',
            meta: 'Meta Two'
        }, {
            value: 10,
            name: 'Series 3',
            meta: 'Meta Three'
        }]
    });

})();