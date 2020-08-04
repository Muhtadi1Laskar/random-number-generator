const canvas = document.getElementById("canvas");



const generateGraph = (bar_type, series_arr, labels_arr) => {
    canvas.style.visibility = "visible";
    console.log(bar_type, series_arr, labels_arr);
    let myChart = canvas.getContext("2d");

    // Global Options
    Chart.defaults.global.defaultFontFamily = "Reem Kufi";
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = "#777";

    // if (coronaPopChart) {
    //     coronaPopChart.destroy();

    // }

    coronaPopChart = new Chart(myChart, {
        type: bar_type,
        data: {
            labels: labels_arr,
            datasets: [{
                label: "",
                data: series_arr,
                backgroundColor: "#4690ac",
                borderColor: "#4690ac",
                borderWidth: 2,
                borderColor: "#4690ac",
                hoverBorderWidth: 3,
                hoverBorderColor: "#4690ac",
                fill: false,
                // borderDash: [5, 5]
            }, ],
        },
        options: {
            elements: { 
                point: { 
                  radius: 5,
                  hitRadius: 10, 
                  hoverRadius: 10,
                } 
              }, 
            responsive: true,
            title: {
                display: false,
                text: "",
                fontSize: 25,
            },
            legend: {
                display: false,
            },
            layout: {
                padding: {
                    left: 50,
                    right: 50,
                    bottom: 50,
                    top: 50,
                },
            },
            tooltips: {
                enabled: true,
                position: 'nearest',
                mode: 'index',
                intersect: false,
                yPadding: 10,
                xPadding: 10,
                caretSize: 8,
                backgroundColor: 'rgba(237, 237, 237)',
                titleFontColor: "black",
                bodyFontColor: "black",
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2
            },
        },
    });
};