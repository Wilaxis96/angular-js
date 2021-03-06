angular.module("ToDoList", ["LocalStorageModule"])
	.controller("ToDoController", function ($scope, localStorageService) {
		if(localStorageService.get("angular-todolist")){
			$scope.todo = localStorageService.get("angular-todolist");
		}
		else{
			$scope.todo = [];
		}
		/*
			{
				actividad:'Terminar el curso de angular',
				fecha: '3-05-15 2:00pm'
			}
		*/
		$scope.$watchCollection('todo',function(newValue,oldValue){
			localStorageService.set("angular-todolist",$scope.todo);
		});

		$scope.addActv = function(){
			$scope.todo.push($scope.newActv);
			$scope.newActv ={};
			localStorageService.set("angular-todolist",$scope.todo);
		}
		
	});

