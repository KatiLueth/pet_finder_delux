myApp.controller('AnimalController', ['$scope', '$http', function($scope, $http) {
    $scope.data = {};


    // ng-model :: setting value of animal to whatever
    $scope.storeAnimal = function() {
        var animalType = $scope.animal;
        console.log(animalType);
        petFinder(animalType);
     };


    function petFinder(animalType) {
    // API Key
        var key = '91b8698cc166e9640d82c4e42988c821';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        // use info from button-click on home page to select animal type!
        query += '&animal=' + animalType;
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                $scope.animal = response.data.petfinder.pet;
                console.log($scope.animal);
            }
        );
    }
    petFinder();

}]);