'use strict';

/**
 * @ngdoc function
 * @name piedrapapelApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the piedrapapelApp
 */
angular.module('piedrapapelApp')
  .controller('GameCtrl', function ($scope,_) {
    
    $scope.gameFinish  = false;
    $scope.options = [
    	{op:"Piedra",icon:'images/icons/stone.png'},
    	{op:"Papel",icon:'images/icons/paper.png'},
    	{op:"Tijeras",icon:'images/icons/scissors.png'},
    	{op:"Lagarto",icon:'images/icons/lizard.png'},
    	{op:"Spock",icon:'images/icons/spock.png'}
    ]
    $scope.selections = {
    	"user" : null,
    	"compu" : null,
    	"result" : '',
        "resClass" : ''
    }
    var rules = [
        { op : "Piedra" , 
          winTo :  [ { op:"Lagarto" , phrase:"aplasta" } , { op:"Tijeras" , phrase:"aplasta" }],
          loseTo : [ { op:"Papel" , phrase:"es tapada por" } , { op:"Spock" , phrase:"es vaporizada por" }]
        },
        { op : "Papel"  , 
            winTo :  [ { op:"Spock"   , phrase:"desautoriza" } , { op:"Piedra" , phrase:"tapa " }] ,
            loseTo : [ { op:"Tijeras" , phrase:"es cortado por" } , { op:"Lagarto" , phrase:"es devorado por" }]
        },
        { op : "Tijeras", 
            winTo : [ { op:"Lagarto" , phrase:"decapita" } , { op:"Papel" , phrase:"cortan" }] ,
            loseTo : [ { op:"Piedra" , phrase:"son aplastadas por" } , { op:"Spock" , phrase:"son rotas por" }]
        },
        { op : "Lagarto", 
            winTo : [ { op:"Spock"   , phrase:"envenena" } , { op:"Papel" , phrase:"devora" }] ,
            loseTo : [ { op:"Piedra" , phrase:"es aplastado por" } , { op:"Tijeras" , phrase:"es decapitado por" }]
        },
        { op : "Spock"  , 
            winTo : [ { op:"Piedra"  , phrase:"vaporiza" } , { op:"Tijeras" , phrase:"rompe" }] ,
            loseTo : [ { op:"Lagarto" , phrase:"es envenenado por" } , { op:"Papel" , phrase:"es desautorizado por" }]
        }
    ]


    $scope.setOption = function(myOption){

    	if($scope.gameFinish  == false){
    		$scope.selections.user = myOption;
			var rand = _.sample($scope.options);
			$scope.selections.compu = rand.op;

			if($scope.selections.user == $scope.selections.compu ){
				$scope.selections.result = "Empate";
                $scope.selections.resClass = 'info';
			}else{
                
                var myRule    = _.findWhere(rules, { op:$scope.selections.user });                
                // check if I won
                var iWon =  _.findWhere(myRule.winTo, { op:$scope.selections.compu });
                if( iWon !== undefined ){
                    $scope.selections.result = iWon.phrase;
                    $scope.selections.resClass = 'success';
                }else{
                    var iLose =  _.findWhere(myRule.loseTo, { op:$scope.selections.compu });
                    if( iLose !== undefined ){
                        $scope.selections.result = iLose.phrase;
                        $scope.selections.resClass = 'danger';
                    }
                }                
            }

    		$scope.gameFinish  = true;
    	}else{
            $scope.newGame();
            $scope.setOption(myOption);
        }
    		
    };


    $scope.newGame = function(){
    	$scope.selections = {
	    	"user" : null,
	    	"compu" : null
    	}
    	$scope.gameFinish  = false;
    }

  });
