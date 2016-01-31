angular.module('shopItBaby')
  .controller('cartycartController', ['$scope', 'yeehaService', cartycartController]);

function cartycartController($scope, yeehaService) {

  var vm = this;

  vm.editing = false;

  vm.teas = yeehaService.teas;

  vm.bag = [];  

  vm.addBag = function(){
    vm.bag.push({
      

    }]



  vm.removeBag = function(){

  }

  vm.total = function() {

  }

}



