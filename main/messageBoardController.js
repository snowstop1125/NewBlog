var boardApp = angular.module('boardApp', []);
boardApp.controller('messageBoardController', function($scope) {
    $scope.messageList = [];
    $scope.save = save;
    $scope.tricky = tricky;
    $scope.deleteMessage = deleteMessage;
    $scope.isAdmin = false;

    function save() {
        $scope.messageList.push($scope.newMessage);
        $scope.newMessage = {};
    }

    function tricky() {
        $scope.isAdmin = !$scope.isAdmin;
    }

    function deleteMessage(message) {
        var index = $scope.messageList.indexOf(message);
        $scope.messageList.splice(index, 1);
    }

});