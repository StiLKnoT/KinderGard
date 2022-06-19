const button = document.querySelector('#closeBtn')
const block = document.querySelector('#Block')
const OpenText = document.querySelector('.OpenText')

function open(){
    OpenText.style.display = "block";
}
function close(){
    block.style.display = "none";
}

button.addEventListener('click', open);
button.addEventListener('click', close);





var xValues = ["videorolik", "Audiokitolar", "Elektron kitoblar", "Bosma nashrdagi kitoblar", "Rasmlar"];
        var yValues = [1, 1, 1, 1, 1];
        var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#1e7145"
        ];

        new Chart("myChart1", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
            data: yValues
            }]
        },
        options: {
            title: {
            display: true,
            text: "Qiziqtiradigan resurslar boyicha statistika"
            }
        }
        });

        var xValues = ["Roman", "Ertak", "Qissa, hikoya", "She'r, topishmoq", "Baadiy"];
        var yValues = [1, 1, 1, 1, 1];
        var barColors = [
        "#FE5D37",
        "#6d6968",
        "#7cc309",
        "#ab86f9",
        "#ffe600"
        ];

        new Chart("myChart2", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
            data: yValues
            }]
        },
        options: {
            title: {
            display: true,
            text: "Qiziqtiradigan kitob turlari boyicha statistika"
            }
        }
        });