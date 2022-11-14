angular.module("school_cycle", [])
    .controller("ctr_module_9", function($scope) {
        $scope.data_table = [
            { id: 240, name: "AGOSTO 2022 - ENERO 2023", description: "Del 1 de febrero al 31 de julio de 2022", start: "2022-08-28", end: "2023-01-31", show: true, save: true, vacs: "Del 28 al 20 de Abril" },
            { id: 236, name: "FEBRERO - JULIO 2022", description: "01 de Feb al 30 de Jul", start: "2022-01-30", end: "2022-07-28", show: true, save: true, vacs: "Abril" },
            { id: 196, name: "AGOSTO 2021 - ENERO 2022", description: "15 Febrero - 30 Junio 2021", start: "2021-02-13", end: "2021-03-01", show: true, save: true, vacs: "29 marzo - 03 de Abril 2021" },
            { id: 109, name: "FEBRERO - JULIO 2021", description: "Semestre A", start: "2020-02-08", end: "2020-08-12", show: true, save: true, vacs: "12 junio 2020 - 07 de Agosto 2020" },
            { id: 117, name: "AGOSTO 2020 - ENERO 2021", description: "Del 1 de febrero al 31 de julio de 2022", start: "2020-01-07", end: "2020-04-23", show: true, save: true, vacs: "NaN" },
            { id: 108, name: "FEBRERO - JULIO 2020", description: "SEMESTRE B", start: "2019-08-11", end: "2020-02-06", show: true, save: true, vacs: "A" },
            { id: 59, name: "AGOSTO 2019 - ENERO 2020", description: "Ba", start: "2019-04-05", end: "2019-04-27", show: true, save: true, vacs: "AB" },
            { id: 56, name: "FEBRERO - JULIO 2019", description: "Periodo para realizar pruebas del API Residendes", start: "2018-01-09", end: "2018-12-30", show: true, save: true, vacs: "2 Días" },
            { id: 24, name: "AGOSTO 2018 - ENERO 2019", description: "Periodo de pruebas", start: "2018-01-09", end: "2019-12-20", show: true, save: true, vacs: "2 Días" },
            { id: 50, name: "FEBRERO - JULIO 2018", description: "TEST", start: "2019-01-09", end: "2018-12-29", show: false, save: false, vacs: "Del 28 al 20 de Abril" },
            { id: 19, name: "AGOSTO 2017 - ENERO 2018", description: "20172", start: "2017-07-31", end: "2017-11-30", show: false, save: false, vacs: "Octubre - Noviembre" },
            { id: 4, name: "FEBRERO - JULIO 2017", description: "1", start: "2015-12-31", end: "2016-07-30", show: false, save: false, vacs: "NaN" }
        ];

        $scope.status = {
            M_options: [
                { id: 1, name: "Activo" },
                { id: 2, name: "Inactivo" }
            ],
            D_options: { id: 1, name: "Activo" }
        };

        $scope.visibility = {
            M_options: [
                { id: 1, name: "Público" },
                { id: 2, name: "Privado" }
            ],
            D_options: { id: 1, name: "Público" }
        };
    });