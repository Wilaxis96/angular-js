angular.module("MyFirstApp",[])
.controller("FirstController", function($scope){
	$scope.nombre="Wilson";
	$scope.nuevoComentario={};
	$scope.comentarios=[{
			comentario: "Buen tutorial",
			username: "Banshee"	
		},
		{
			comentario: "Que tutorila tan malo",
			username:"Otro usuario"
		}
	];
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario)
		$scope.nuevoComentario={};
	};;
});
