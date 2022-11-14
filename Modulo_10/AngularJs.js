angular.module("config", [])
    .controller("ctr_module_10", function($scope) {
        $scope.data = [{
            // General
            id: 1,
            cct: "DEMO",
            user1: "@demo",
            user2: "demo.escolares.com.mx",
            dom: "DEMO",
            name_ins: "DEMO",
            acronim: "DEMO",
            key_word: "demo, test escuela",
            // Datos de contacto
            link_web: "https://escolaresmx.com",
            phone: "6181643396",
            email: "escolaresmx.com@gmail.com",
            direction: "Ameca #405 Colonia Jalisco",
            agent: "Dhomper Tecnologías",
            agent_carg: "Empresa",
            // Redes sociales
            facebook: "EscolaresMX",
            twitter: "718261034692255744",
            instagram: "escolaresmx",
            youtube: "escolaresmx",
            calendar: "Link del calendario",
            video_link: "Link del video",
            path: "Link recorrido",
            // Valores de la escuela
            motto: "Lleva tu escuela a otro nivel",
            mission: "Misión",
            vision: "Visión",
            values: "Valores"
        }];

        $scope.state = {
            M_options: [
                { id: 1, name: "-Selecciona un periodo-" },
                { id: 2, name: "Aguascalientes" },
                { id: 3, name: "Baja california" },
                { id: 4, name: "Baja california sur" },
                { id: 5, name: "Campeche" },
                { id: 6, name: "Chiapas" },
                { id: 7, name: "Chihuahua" },
                { id: 8, name: "Ciudad de méxico" },
                { id: 9, name: "Coahuila" },
                { id: 10, name: "Colima" },
                { id: 11, name: "Durango" },
                { id: 12, name: "Estado de méxico" },
                { id: 13, name: "Extranjero" },
                { id: 14, name: "Guanajuato" },
                { id: 15, name: "Guerrero" },
                { id: 16, name: "Hidalgo" },
                { id: 17, name: "Jalisco" },
                { id: 18, name: "Michoacan" },
                { id: 19, name: "Morelos" },
                { id: 20, name: "Nayarit" },
                { id: 21, name: "Nuevo Leon" },
                { id: 22, name: "Oaxaca" },
                { id: 23, name: "Puebla" },
                { id: 24, name: "Queretaro" },
                { id: 25, name: "Quintana Roo" },
                { id: 26, name: "San Luis Potosí" },
                { id: 27, name: "Sinaloa" },
                { id: 28, name: "Tabasco" },
                { id: 29, name: "Mataulipas" },
                { id: 30, name: "Tlaxcala" },
                { id: 31, name: "Veracruz" },
                { id: 32, name: "Yucatán" },
                { id: 33, name: "Zacatecas" }
            ],
            D_options: { id: 1, name: "-Selecciona un periodo-" }
        };

        $scope.town = {
            M_options: [
                { id: 1, name: "-Selecciona un periodo-" },
                { id: 2, name: "Aguascalientes" },
                { id: 3, name: "Baja california" },
                { id: 4, name: "Baja california sur" },
                { id: 5, name: "Campeche" },
                { id: 6, name: "Chiapas" },
                { id: 7, name: "Chihuahua" },
                { id: 8, name: "Ciudad de méxico" },
                { id: 9, name: "Coahuila" },
                { id: 10, name: "Colima" },
            ],
            D_options: { id: 1, name: "-Selecciona un periodo-" }
        };

        $scope.section = {
            M_options: [
                { id: 1, name: "-Selecciona una opción-" },
                { id: 2, name: "Publico" },
                { id: 3, name: "Privado" }
            ],
            D_options: { id: 1, name: "-Selecciona una opción-" }
        };

        $scope.level_edu = {
            M_options: [
                { id: 1, name: "-Selecciona una opción-" },
                { id: 2, name: "Básico" },
                { id: 3, name: "Media superior" },
                { id: 4, name: "Superior" },
                { id: 5, name: "No Aplica" }
            ],
            D_options: { id: 1, name: "-Selecciona una opción-" }
        };

        $scope.category = {
            M_options: [
                { id: 1, name: "-Selecciona una opción-" },
                { id: 2, name: "Preescolar" },
                { id: 3, name: "Primaria" },
                { id: 4, name: "Secundaria" },
                { id: 5, name: "Preparatoria" },
                { id: 6, name: "Profesonal Técnico" },
                { id: 7, name: "Profesional" },
                { id: 8, name: "Maestría, Doctorado, Post Doctorado" },
                { id: 9, name: "Múltiple" },
                { id: 10, name: "No Aplica" }
            ],
            D_options: { id: 1, name: "-Selecciona una opción-" }
        };

        $scope.subsystem = {
            M_options: [
                { id: 1, name: "-Selecciona una opción-" },
                { id: 2, name: "DGETAyCM" },
                { id: 3, name: "DGETI" },
                { id: 4, name: "DGCFT" },
                { id: 5, name: "DGECYTM" },
                { id: 6, name: "DGB" },
                { id: 7, name: "CONALEP" },
                { id: 8, name: "DGCOLBACH" },
                { id: 9, name: "No Aplica" }
            ],
            D_options: { id: 1, name: "-Selecciona una opción-" }
        };

        $scope.turn = {
            M_options: [
                { id: 1, name: "-Selecciona una opción-" },
                { id: 2, name: "Matutino" },
                { id: 3, name: "Vespertino" },
                { id: 4, name: "Matutino y Vespertino" }
            ],
            D_options: { id: 1, name: "-Selecciona una opción-" }
        };

        $scope.gsuit = {
            M_options: [
                { id: 1, name: "-Selecciona una opción-" },
                { id: 2, name: "matricula@demo.edu.mx" },
                { id: 3, name: "paterno.materno.nombre@demo.edu.mx" },
                { id: 4, name: "paterno.materno.inicial_nombre@demo.edu.mx" },
                { id: 5, name: "nombre.paterno.materno@demo.edu.mx" }
            ],
            D_options: { id: 1, name: "-Selecciona una opción-" }
        };

        $scope.home_page = {
            M_options: [
                { id: 1, name: "-Selecciona una opción-" },
                { id: 2, name: "Panel" },
                { id: 3, name: "Landing" },
                { id: 4, name: "Web" },
                { id: 5, name: "Aspirantes" }
            ],
            D_options: { id: 1, name: "-Selecciona una opción-" }
        };

        $scope.theme = {
            M_options: [
                { id: 1, name: "Default" },
                { id: 2, name: "Cerulan" },
                { id: 3, name: "Cosmo" },
                { id: 4, name: "Slate" },
                { id: 4, name: "Sandstone" },
                { id: 4, name: "Superhero" },
                { id: 4, name: "Yeti" },
                { id: 5, name: "Paper" }
            ],
            D_options: { id: 1, name: "Default" }
        };

        $scope.style = {
            M_options: [
                { id: 1, name: "Por defecto" },
                { id: 2, name: "Claro" },
                { id: 3, name: "Oscuro" },
            ],
            D_options: { id: 1, name: "Por defecto" }
        };
    });