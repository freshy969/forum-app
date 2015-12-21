
app.controller('CategoryCtrl', ['$scope','$location','categories', 'userMessages', function($scope, $location, categories, userMessages){
 
    $scope.message = "";
       
    $scope.categories = categories.categories; // add [categories] from our factory in angularapp
    $scope.message = userMessages.getMessage();
    
    $scope.deleteCategory = function(category){
        categories.deleteOne(category);
        $scope.showMessage = true;
        userMessages.setMessage("The Category was Deleted Successfully");
    }
    
    // display and ordering functions
    $scope.orderByTitle = function(){
        if($scope.rowFilter == 'title'){
            $scope.rowFilter = '-title';
        }
        else{
            $scope.rowFilter = 'title';
        }
    };
    $scope.orderByDate= function(){
        if($scope.rowFilter == '-created'){
            $scope.rowFilter = 'created';
        }
        else{
            $scope.rowFilter = '-created';
        }
    };
    $scope.hideMessage = function(){
        userMessages.setMessage('');
        $scope.message = userMessages.getMessage();
    }
}]);

