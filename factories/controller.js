angular.module("ToDoList", ["LocalStorageModule"])
	.factory("ToDoService",function ( localStorageService){
		var ToDoService = {};
		ToDoService.key="angular-todolist";

 		if(localStorageService.get(ToDoService.key)){
			ToDoService.activities = localStorageService.get(ToDoService.key);
		}
		else{
			//ToDoService.activities = [];
		}

		ToDoService.add = function(newActv){
			ToDoService.activities.push(newActv);
		};

		ToDoService.updaLocalStorage = function(){
			localStorageService.set(ToDoService.key, ToDoService.activities);
		};

		ToDoService.clean = function(){
			ToDoService.activities = [];
			ToDoService.updaLocalStorage();
			return ToDoService.getAll();
		};

		ToDoService.getAll = function(){
			return ToDoService.activities;
		}
		ToDoService.removeItem = function(item){
   		// Filter Array
   			ToDoService.activities.map( function( object , index ,arr ){
      		if ( object === item ) {
     		ToDoService.activities.splice(index, 1);
     		}
   		});

   		ToDoService.updaLocalStorage();
   			return ToDoService.getAll();
  		}
		return ToDoService;	
	})
	.controller("ToDoController", function ($scope,ToDoService) {

		$scope.todo=ToDoService.getAll();
		$scope.newActv= {};
		$scope.addActv = function(){
			ToDoService.add($scope.newActv);
			$scope.newActv= {};
		}
		$scope.removeActv = function(item){
			ToDoService.removeItem(item);
		}

		$scope.clean = function(){
			$scope.todo = ToDoService.clean();
		}
	});