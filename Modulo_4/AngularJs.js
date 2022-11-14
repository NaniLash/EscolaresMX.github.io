angular.module("work", [])
    .controller("ctr_module_4", function($scope) {
        $scope.data_person = [
            { id: 1, name: "David Victor", lastname: "Berumen Ramirez", career: "Desarrollador de software", dateini: "2022-08-08", dateend: "2022-10-08", phone: "NaN", status: "Pendiente" },
            { id: 2, name: "Francisco", lastname: "Alvarez Bueno", career: "Desarrollador de software", dateini: "2020-08-07", dateend: "2023-11-18", phone: "6771064052", status: "Pendiente" },
            { id: 3, name: "Angel", lastname: "allende curtido", career: "Desarrollador de software", dateini: "2022-08-08", dateend: "2022-10-08", phone: "7789123712", status: "Pendiente" },
            { id: 4, name: "eduardo", lastname: "valentin telequinesis", career: "Desarrollador de software", dateini: "2022-08-10", dateend: "2022-10-12", phone: "618299812", status: "Pendiente" }
        ]
    });