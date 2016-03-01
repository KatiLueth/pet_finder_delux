myApp.factory('PetFactory', ['$http', function($http){

    // **** description limit to first 100 characters ('' | 100)


    // PRIVATE

    //var getData = function(){
    //    return data;
    //};






   // Add data to "Favorites" database.
    var addNewFave = function(favoriteAnimal){
        // ajax 'POST' new favorite to DB
        // shorthand ajax
        //$http.post('/new', favoriteAnimal, config).then(successCallback, errorCallback);


        // regular ajax
        $http({
            method: 'POST',
            url: '/new',
            data: favoriteAnimal
        }).then(function(response){
            console.log(response.data);
        });
    };





    // PUBLIC

    var publicApi = {
        petData: function(favoriteAnimal){
            addNewFave(favoriteAnimal);
            console.log('From factory: ', favoriteAnimal)
        },


    };



    return publicApi;


}]);