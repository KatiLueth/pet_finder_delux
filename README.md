# Pet Finder Delux

### Description
Revised Pet Finder SPA to include Angular routes, Angular factories, server-side logic, and SQL.

#### Features
In this application, users will be able to

* select an animal type to view a random animal of that type
* save their favorite animals
* view a list of their favorite animals

##### Home Page
When users first visit the app, they will see
* a drop-down list of animal types -- this list is populated via an array of animal types. Animal types supported by 
the PetFinder API.
* a link that takes them to a list of any favorited animals
* a count of the number of favorited animals

##### Animal View
Once an animal is selected from the drop-down list, the application will display a random pet of the selected animal 
type. This requires a call to the PetFinder API. The pet details include:
* an image of the pet
* the name of the pet
* the complete description of the pet

##### Favorites Button
In addition, the user will have access to a button that adds the current pet to a list of favorites. The list of 
favorites will be saved to a database. The data needed includes:
* pet ID
* pet name
* pet image URL
* the first 100 characters of the pet's description

##### Faves View
When users navigate to this page, they will see a list of all of the animals they have favorited. This list will be
pulled from the database.
