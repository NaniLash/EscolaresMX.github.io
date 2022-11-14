angular.module("career", [])
    .controller("ctr_module_8", function($scope) {
        $scope.careers = {
            M_options: [
                { id: "1", name: "-Selecciona una carrera-", disable: true, view: "invisible" },
                { id: "2", name: "Animador", disable: false, view: "visible", ab: "ANI", key: 1, area: "Diseño", mat: "DIS{ym}####", link: "NaN" },
                { id: "3", name: "ARH", disable: false, view: "visible", ab: "ARH", key: 1, area: "Software", mat: "DIS{ym}####", link: "NaN" },
                { id: "4", name: "ASD", disable: false, view: "visible", ab: "ASD", key: 1, area: "Software", mat: "DIS{ym}####", link: "NaN" },
                { id: "5", name: "ASR", disable: false, view: "visible", ab: "ASR", key: 1, area: "Software", mat: "DIS{ym}####", link: "NaN" },
                { id: "6", name: "Confección", disable: false, view: "visible", ab: "CON", key: 1, area: "Manufactura", mat: "DIS{ym}####", link: "NaN" },
                { id: "7", name: "Diseño gráfico", disable: false, view: "visible", ab: "DG", key: 1, area: "Diseño", mat: "DIS{ym}####", link: "NaN" },
                { id: "8", name: "Ingeniería en software", disable: false, view: "visible", ab: "ISW", key: 1, area: "Software", mat: "DIS{ym}####", link: "NaN" },
                { id: "9", name: "Ingeniería mecatrónica", disable: false, view: "visible", ab: "IMC", key: 1, area: "Software", mat: "DIS{ym}####", link: "NaN" },
                { id: "10", name: "Licenciatura en trabajo social", disable: false, view: "visible", ab: "LTS", key: 1, area: "Social", mat: "DIS{ym}####", link: "NaN" },
                { id: "11", name: "Mecatrónica", disable: false, view: "visible", ab: "MEC", key: 1, area: "Software", mat: "DIS{ym}####", link: "NaN" },
                { id: "12", name: "Prueba", disable: false, view: "visible", ab: "TEST", key: 1, area: "TEST", mat: "DIS{ym}####", link: "NaN" }
            ],
            D_options: { id: "1", name: "-Selecciona una carrera-", disable: true, view: "invisible" }
        };

        $scope.ARH = {
            M_options: [],
            D_options: {}
        };

        $scope.software = {
            M_options: [
                { id: "1", name: "-Selecciona un plan de estudio-", disable: true, view: "invisible" },
                { id: "2", name: "ISW 2008-2013", disable: false, view: "visible" },
                { id: "3", name: "ISW 2014-2019", disable: false, view: "visible" }
            ],
            D_options: { id: "1", name: "-Selecciona un plan de estudio-", disable: true, view: "invisible" }
        };

        $scope.data_software1 = [
            { number: 1, matter: "Matemáticas", level: 1, hours: 80 },
            { number: 2, matter: "Álgebra", level: 1, hours: 80 },
            { number: 3, matter: "Tópicos selectos de software", level: 1, hours: 80 },
            { number: 4, matter: "Bases de datos II", level: 1, hours: 80 },
            { number: 5, matter: "Diseño de bases de datos", level: 1, hours: 80 },
            { number: 6, matter: "Arquitectura de software", level: 1, hours: 80 },
            { number: 7, matter: "Pruebas de sistemas tecnológicos de comunicación", level: 1, hours: 80 }
        ];

        $scope.data_software2 = [
            { number: 1, matter: "Economía", level: 1, hours: 80 },
            { number: 2, matter: "Diseño de Bases de datos", level: 1, hours: 80 },
            { number: 3, matter: "Pruebas de sistemas tecnológicos de comunicación ", level: 1, hours: 80 },
            { number: 4, matter: "Arquitectura de software", level: 1, hours: 80 },
            { number: 5, matter: "Álgebra", level: 1, hours: 80 },
            { number: 6, matter: "Tópicos selectos de software ", level: 1, hours: 80 },
            { number: 7, matter: "Ingeniería de software", level: 1, hours: 80 },
            { number: 8, matter: "bases de datos II", level: 1, hours: 80 }
        ];

        $scope.maters = [
            { name: "Álgebra", status: true },
            { name: "Algoritmos", status: true },
            { name: "ASD", status: true },
            { name: "Bases de datos", status: true },
            { name: "Biología", status: true },
            { name: "Matemáticas", status: true },
            { name: "Cálculo diferencias", status: true },
            { name: "Cálculo integral", status: true },
            { name: "Ecología", status: true },
            { name: "Economía", status: true },
            { name: "Derecho", status: true },
            { name: "Ética", status: true }
        ];

    });