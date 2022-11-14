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
                { id: 10, name: "Test", disable: false, view: "visible" }
            ],
            D_options: { id: "1", name: "-Selecciona un periodo-", disable: true, view: "invisible" }
        };

        $scope.polls = [
            { id: 1, title: "¿Cuántas patas tiene un gato cojo?", r1: "3 patas", r2: "6 patas", r3: "45 patas", r4: "700 patas", reactive: "Lleva tu escuela a otro nivel", points: 3, value: 5 },
            { id: 2, title: "¿Por qué cruzó la calle la gallina?", r1: "Por curiosa", r2: "Para pasar la calle", r3: "No sé", r4: "Tenia miedo", reactive: "Hola que hace", points: 7, value: 2 },
            { id: 3, title: "¿Cómo ve el ciego?", r1: "Por los ojos", r2: "A veces", r3: "Olor", r4: "No sé", reactive: "Hola, qué no hace", points: 2, value: 9 }
        ];

        $scope.type_reac = {
            M_options: [
                { id: 1, name: "--Selecciona el tipo--", disable: true },
                { id: 2, name: "Respuesta abierta corta", disable: false },
                { id: 3, name: "Respuesta abierta", disable: false },
                { id: 4, name: "Palabra secreta", disable: false, },
                { id: 5, name: "Lista", disable: false },
                { id: 6, name: "Opción", disable: false },
                { id: 7, name: "Opcion multiple", disable: false },
                { id: 8, name: "Rango", disable: false },
                { id: 9, name: "CCT", disable: false },
                { id: 10, name: "CCT Carrera", disable: false }
            ],
            D_options: { id: "1", name: "-Selecciona un periodo-", disable: true }
        };

        $scope.obligatory = {
            M_options: [
                { id: 1, name: "-¿Es obligatoria?-", disable: true },
                { id: 2, name: "SI", disable: false },
                { id: 3, name: "NO", disable: false }
            ],
            D_options: { id: "1", name: "-¿Es obligatoria?-", disable: true }
        };

        $scope.type_action = {
            M_options: [
                { id: 1, name: "-Sin acción-", disable: true },
                { id: 2, name: "Reactivo", disable: false },
                { id: 3, name: "Opción", disable: false },
                { id: 2, name: "Texto", disable: false }
            ],
            D_options: { id: "1", name: "-Sin acción-", disable: true }
        }
    });