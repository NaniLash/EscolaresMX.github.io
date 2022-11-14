angular.module("voting", [])
    .controller("ctr_module_3", function($scope) {
        $scope.data_table = [
            { number: 1, title: "Desayuno", description: "¿Qué tipo de desayuno?", link: "", open: true, show: true, save: false, votes: 10 },
            { number: 2, title: "Prueba", description: "¿Esto es una prueba?", link: "", open: true, show: false, save: false, votes: 101 },
            { number: 3, title: "Demo", description: "Do you like it?", link: "", open: true, show: false, save: true, votes: 421 }
        ];

        $scope.student_info = [
            { id: 1, name: "Berumen Ramirez David Victor", curp: "DEMO831902", enrollment: "BERD940621HDGRMV01", img: "" },
            { id: 2, name: "Lopez Díaz Lilith", curp: "ABC123", enrollment: "CURPDEMO", img: "" },
            { id: 3, name: "Garcia Zaragoza Gustavo", curp: "1000002", enrollment: "XXXX166507XXXXXX29", img: "" },
            { id: 4, name: "Miranda Amador Antonio", curp: "DEMO812437", enrollment: "XXXX659751XXXXXX77", img: "" },
            { id: 5, name: "Zapata Bravo Alicia", curp: "123456", enrollment: "CURPCHANTAL", img: "" },
            { id: 6, name: "Moreno Rodriguez Christian Chantal", curp: "DEMO831902", enrollment: "CURPCHANTAL", img: "" },
            { id: 7, name: "Schietekat Castellanos Cesar Alberto", curp: "123457", enrollment: "CURPCESAR", img: "" }
        ]
    });