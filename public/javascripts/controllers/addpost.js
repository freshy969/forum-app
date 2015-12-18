app.controller('AddPostCtrl', ['$scope', '$location' ,'posts', 'userMessages', function($scope, $location, posts, userMessages){

    $scope.posts = posts.posts; // add [posts] from our factory in angularapp
    $scope.maxPostContentSize = 230;
    
    
    // add posts function
    $scope.addPost = function(valid){
        if(!valid || !$scope.newPostTitle || $scope.newPostTitle === '' || !$scope.newPostContent || $scope.newPostContent === ''){ return; }
        posts.create({
            title: $scope.newPostTitle ,
            postcontent: $scope.newPostContent,
            upvotes: 0,
            downvotes: 0,
            category: $scope.newPostCategory,
            author: 'Developer',
        });
        $scope.newPostTitle = '';
        $scope.newPostContent = '';
        $scope.showMessage = true;
        $scope.addpostform.$setUntouched();
        $location.path('home');
        userMessages.setMessage("Your Post was Added Successfully");
    }
    
}]);

