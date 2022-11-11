angular.module("voting", [])
    .controller("ctr_module_3", function($scope) {
        $scope.data_table = [
            { number: 1, title: "Desayuno", description: "¿Qué tipo de desayuno?", link: "", open: true, show: true, save: false, votes: 10 },
            { number: 2, title: "Prueba", description: "¿Esto es una prueba?", link: "", open: true, show: false, save: false, votes: 101 },
            { number: 3, title: "Demo", description: "Do you like it?", link: "", open: true, show: false, save: true, votes: 421 }
        ];
    });