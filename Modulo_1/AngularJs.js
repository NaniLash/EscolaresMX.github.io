angular.module("module1", [])
    .controller("ctr_module_1", function($scope) {

        $scope.data_period = {
            M_options: [
                { id: "1", name: "-Selecciona un periodo-", disable: true, view: "invisible" },
                { id: "2", name: "Agosto 2022 - Enero 2023", disable: false },
                { id: "3", name: "Febrero - Julio 2022", disable: false },
                { id: "4", name: "Agosto 2021 - Enero 2022", disable: false },
                { id: "5", name: "Febrero - Julio 2021", disable: false },
                { id: "6", name: "Agosto 2020 - Enero 2021", disable: false },
                { id: "7", name: "Febrero - Julio 2020", disable: false },
                { id: "8", name: "Agosto 2019 - Enero 2020", disable: false },
                { id: "9", name: "Febrero - Agosto 2019", disable: false },
                { id: "10", name: "Agosto 2018 - Enero 2019", disable: false },
                { id: "11", name: "Febrero - Julio 2018", disable: false },
                { id: "12", name: "Agosto 2017 - Enero 2018", disable: false },
                { id: "13", name: "Febrero - Julio 2017", disable: false }
            ],
            D_options: { id: "1", name: "-Selecciona un periodo-", disable: true, view: "invisible" }
        };

        $scope.student_report = [
            { id: "1", name: "Lilith Lopez Díaz", career: "Ingenieria en crazilogia", total: 2, period: 2, last: "Mar 29, 2022" },
            { id: "2", name: "Beto Chavez", career: "Ingeniería en lomas turbas", total: 5, period: 1, last: "Feb 14, 2016" },
            { id: "3", name: "Jorge Najera", career: " Ingenieria en Temasco elchango", total: 19, period: 3, last: "mayo 29, 2017" }
        ];



    });