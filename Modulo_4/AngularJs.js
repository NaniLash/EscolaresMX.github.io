angular.module("work", [])
    .controller("ctr_module_4", function($scope) {
        $scope.data_person = [
            { name: "David Victor", lastname: "Berumen Ramirez", career: "Desarrollador de software", dateini: "2022-08-08", dateend: "2022-10-08", phone: "", status: "Pendiente" },
            { name: "Francisco", lastname: "Alvarez Bueno", career: "Desarrollador de software", dateini: "2020-08-07", dateend: "2023-11-18", phone: "6771064052", status: "Pendiente" }
        ]
    });