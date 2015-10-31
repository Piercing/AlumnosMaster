/**
 * Created by Piercing on 30/10/15.
 */


// creamos el modelo alumnos
// El 'scope' permite vincular modelos, vistas y controladores.
// Cada aplicación Angular.js siempre tiene un 'scope raiz' que se crea en la directiva 'ng-app'
// Los 'scopes' están ordenados de forma gerárquica, siguiendo el DOM de una página y los 'scopes'
// hijos heredan de forma general de sus padres, a excepción de los 'scopes aislados'
function AlumnosController($scope) {
    $scope.alumnos = [
        {nombre: "Juan Blanco", telefono: "1234567890", curso: "Master Keepcoding"},
        {nombre: "Rosa Luxemburgo", telefono: "0987654321", curso: "Master Keepcoding"},
        {nombre: "Alberto Herrera", telefono: "1122334455", curso: "Master Keepcoding"},
        {nombre: "Ana Mariño", telefono: "6677889900", curso: "Master Keepcoding"}
    ];

    // 'Save' y 'ShowForm' se aplica al 'scope' del modelo alumnos
    // La 'función Save y ShowForm' debe estar obligatoriamente
    // dentro del alcance del controller 'AliumnosController
    $scope.Save = function () {
        $scope.alumnos.push({
            nombre: $scope.nuevoAlumno.nombre,
            telefono: $scope.nuevoAlumno.telefono,
            curso: $scope.nuevoAlumno.curso
        });
        $scope.formVisibility = false;
        console.log($scope.formVisibility);
    };

    $scope.formVisibility = false;
    $scope.ShowForm = function () {
        $scope.formVisibility = true;
        console.log($scope.formVisibility);
    };
}




