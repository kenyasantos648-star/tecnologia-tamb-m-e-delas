const script = document.createElement("script");

script.src = "https://cdn.jsdelivr.net/npm/chart.js";

script.onload = function () {

    // Desafios acadêmicos
    new Chart(document.getElementById("desafiosChart"), {
        type: "bar",

        data: {
            labels: [
                "Metodologia e didática",
                "Linguagens de programação",
                "Falta de conhecimento prévio",
                "Ritmo acelerado",
                "Sobrecarga de atividades",
                "Falta de apoio institucional"
            ],

            datasets: [{
                label: "Participantes (%)",

                data: [60.6, 57.6, 54.5, 54.5, 45.5, 42.4],

                backgroundColor: "#8062d6"
            }]
        },

        options: {
            indexAxis: "y",
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Participação em projetos
    new Chart(document.getElementById("participacaoChart"), {
        type: "bar",

        data: {
            labels: [
                "Já participaram",
                "Não participaram"
            ],

            datasets: [{
                data: [20, 13],

                backgroundColor: [
                    "#6546c7",
                    "#e66b9b"
                ]
            }]
        },

        options: {
            responsive: true
        }
    });

    // Percepção da contribuição
    new Chart(document.getElementById("contribuicaoChart"), {
        type: "bar",

        data: {
            labels: [
                "Contribui muito",
                "Parcialmente",
                "Pouco",
                "Não contribui"
            ],

            datasets: [{
                data: [23, 2, 1, 1],

                backgroundColor: [
                    "#6546c7",
                    "#9278e5",
                    "#e66b9b",
                    "#36a6a0"
                ]
            }]
        },

        options: {
            responsive: true
        }
    });

};

document.head.appendChild(script);