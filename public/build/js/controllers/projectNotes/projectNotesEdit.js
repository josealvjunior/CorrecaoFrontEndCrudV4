angular.module('app.controllers')
    .controller('ProjectNotesEditController',
    ['$scope','$location','$routeParams','ProjectNotes',
        function($scope,$location,$routeParams, ProjectNotes){
        $scope.projectNotes = ProjectNotes.get({id: $routeParams.id, noteId: $routeParams.noteId});
            $scope.save = function () {
            if($scope.form.$valid){
                ProjectNotes.update({id:$scope.notes.id ,noteId: $scope.notes.noteId},$scope.notes,function(){
                    $location.path('/projects/'+$routeParams.id+'/notes');
                });
            }
        }
    }]);