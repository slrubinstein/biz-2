angular.module('bizCard')

.factory("CardModel", function() {

  function Card(ownerId) {
    this.ownerId = ownerId;
    this.name = '';
    this.email = '';
    this.title = '';
  }



  return Card;

});
