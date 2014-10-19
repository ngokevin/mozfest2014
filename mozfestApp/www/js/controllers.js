angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    // Exposes click handler to the template via the $scope object.
    $scope.takePicture = function() {
        if (!navigator.camera) {
            console.log('App is not yet built nor running on actual device');
            return;
        }

        // Calls the camera API. Cordova will abstract this to work with all
        // devices natively.
        navigator.camera.getPicture(function(imageURI) {
            // Exposes the image src to the template via the $scope object.
            window.document.getElementById('img').setAttribute('src', imageURI);
        }, function(err) {
            console.log("Error calling the navigator.camera API");
        }, {quality: 100});
    };
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
