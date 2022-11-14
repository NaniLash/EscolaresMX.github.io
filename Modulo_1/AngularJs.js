angular.module("module1", [])
    .controller("ctr_module_1", function($scope) {

        $scope.data_period = {
            M_options: [
                { id: "1", name: "-Selecciona un periodo-", disable: true, view: "invisible" },
                { id: "2", name: "Agosto 2022 - Enero 2023", disable: false, view: "visible" },
                { id: "3", name: "Febrero - Julio 2022", disable: false, view: "visible" },
                { id: "4", name: "Agosto 2021 - Enero 2022", disable: false, view: "visible" },
                { id: "5", name: "Febrero - Julio 2021", disable: false, view: "visible" },
                { id: "6", name: "Agosto 2020 - Enero 2021", disable: false, view: "visible" },
                { id: "7", name: "Febrero - Julio 2020", disable: false, view: "visible" },
                { id: "8", name: "Agosto 2019 - Enero 2020", disable: false, view: "visible" },
                { id: "9", name: "Febrero - Agosto 2019", disable: false, view: "visible" },
                { id: "10", name: "Agosto 2018 - Enero 2019", disable: false, view: "visible" },
                { id: "11", name: "Febrero - Julio 2018", disable: false, view: "visible" },
                { id: "12", name: "Agosto 2017 - Enero 2018", disable: false, view: "visible" },
                { id: "13", name: "Febrero - Julio 2017", disable: false, view: "visible" }
            ],
            D_options: { id: "1", name: "-Selecciona un periodo-", disable: true, view: "invisible" }
        };

        $scope.student_report = [
            { id: "1", name: "Lilith Lopez Díaz", career: "Ingenieria en crazilogia", total: 2, period: 2, last: "Mar 29, 2022" },
            { id: "2", name: "Beto Chavez", career: "Ingeniería en lomas turbas", total: 5, period: 1, last: "Feb 14, 2016" },
            { id: "3", name: "Jorge Najera", career: " Ingenieria en Temasco elchango", total: 19, period: 3, last: "mayo 29, 2017" }
        ];

        $scope.student_data = [
            { number: 1, id: "2208", date: "07/09/2002", status: "ABIERTO", by: "Marison lozano", period: "FEBRERO - JULIO 2022" },
            { number: 2, id: "2139", date: "07/09/2002", status: "ABIERTO", by: "David Berumen", period: "FEBRERO - JULIO 2022" }
        ];

        $scope.filter_period = {
            M_options: [
                { id: 1, name: "- Selecciona un periodo -" },
                { id: 2, name: "Agosto 2022 - Enero 2023" },
                { id: 3, name: "Agosto 2022 - Enero 2023" },
                { id: 4, name: "Agosto 2021 - Enero 2022" },
                { id: 5, name: "Febrero - Julio 2021" }
            ],
            D_options: { id: 1, name: "- Selecciona un periodo -" }
        };

        $scope.filter_group = {
            M_options: [
                { id: 1, name: "- Selecciona un grupo -" },
                { id: 2, name: "3C Administración de Recursos Humanos TM" },
                { id: 3, name: "4D Ingeniería en Software TV" },
                { id: 4, name: "5E ASD TM" }
            ],
            D_options: { id: 1, name: "- Selecciona un grupo -" }
        };

        $scope.filter_reports = {
            M_options: [
                { id: 1, name: "- Selecciona un periodo -" },
                { id: 2, name: "1 - 10" },
                { id: 3, name: "11 - 15" },
                { id: 4, name: "16 - 20" },
                { id: 5, name: "21 - 30" },
                { id: 6, name: "31 - 50" },
                { id: 7, name: "51 En adelante" }
            ],
            D_options: { id: 1, name: "- Selecciona un periodo -" }
        };

        $scope.info_norm = [
            { id: 1, article: 1, description: "Indiciplina", sanc: "Reporte y llamada a los padres", type: "MENOR", status: true },
            { id: 2, article: 2, description: "Suspensión", sanc: "Reporte y llamada a los padres", type: "MAYOR", status: true },
            { id: 3, article: 1.1, description: "No portar el uniforme", sanc: "Se devolvera a la escuela", type: "MENOR", status: false }
        ];

        $scope.grave = {
            M_options: [
                { id: 1, name: "- Selecciona la gravedad -" },
                { id: 2, name: "General" },
                { id: 3, name: "Falta Menor" },
                { id: 4, name: "Falta Mayor" },
                { id: 5, name: "Falta Grave" }
            ],
            D_options: { id: 1, name: "- Selecciona la gravedad -" }
        };

        $scope.reload = function() {
            location.reload(true);
        };

        google.charts.load('current', { 'packages': ['bar'] });
        google.charts.setOnLoadCallback(drawStuff);

        function drawStuff() {
            var data = new google.visualization.arrayToDataTable([
                ["", ""],
                ["No traer uniforme", 2],
                ["Indiciplina", 9]
            ]);

            var options = {
                title: "D , i",
                bar: { groupWidth: "95%" },
                legend: { position: "none" },
                bars: 'horizontal',
                axes: {
                    x: {
                        0: { side: 'top', label: 'Reporte mensual' }
                    }
                },
            };

            var chart = new google.charts.Bar(document.getElementById('chart_div'));
            chart.draw(data, options);
        };

    });