angular.module("poll", [])
    .controller("ctr_module_5", function($scope) {
        $scope.data_period = {
            M_options: [
                { id: 1, name: "-Selecciona una encuesta-", disable: true, view: "invisible" },
                { id: 2, name: "Canales de percepción(VARK) - ¿Cómo aprendo mejor?", disable: false, view: "visible" },
                { id: 3, name: "Encuesta de conocimientos generales", disable: false, view: "visible" },
                { id: 4, name: "Encuesta de satisfacción", disable: false, view: "visible" },
                { id: 5, name: "Encuesta demo", disable: false, view: "visible" },
                { id: 6, name: "Examen de ecología 2", disable: false, view: "visible" },
                { id: 7, name: "Examen de matemáticas", disable: false, view: "visible" },
                { id: 8, name: "Grasha test", disable: false, view: "visible" },
                { id: 9, name: "Habitos alimenticios", disable: false, view: "visible" },
                { id: 10, name: "Test", disable: false, view: "visible" },
            ],
            D_options: { id: "1", name: "-Selecciona un periodo-", disable: true, view: "invisible" }
        };

        $scope.polls = {
            M_options: [
                { id: 1, title: "¿Cuántas patas tiene un gato cojo?", r: [{ res: "3 patas" }] }
            ]
        }
    });