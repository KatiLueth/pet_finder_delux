myApp.controller('AnimalController', ['$scope', '$http', 'PetFactory', function($scope, $http, PetFactory) {
   console.log('AnimalController');
    $scope.data = {};
    // bring factory in
    $scope.petFactory = PetFactory;

    // ng-model :: setting value of animal to whatever
    $scope.storeAnimal = function() {
        var animalType = $scope.animal;
        console.log(animalType);
        petFinder(animalType);
     };

// *add:: ng-hide until $scope.animal = true;
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

            });
    }

    $scope.addFavorite = function(){
        //var favoriteAnimal = $scope.animal;
        var favoriteAnimal = {
            name: $scope.animal.name.$t,
            pet_id: $scope.animal.id.$t,
            description: ($scope.animal.description.$t).substring(0, 100),
            imgUrl: $scope.animal.media.photos.photo[2].$t
        };
        console.log(favoriteAnimal);
        // send favorite data to factory
        $scope.petFactory.petData(favoriteAnimal);
    };







    // call petFinder Function
    petFinder();

//console.log($scope.animal);
}]);