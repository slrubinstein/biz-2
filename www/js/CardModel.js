angular.module('bizCard')

.factory("CardModel", function() {

  function Card(ownerKey) {
    this.ownerKey = ownerKey;
    this.name = '';
    this.email = '';
    this.title = '';
  }

  return Card;

});
