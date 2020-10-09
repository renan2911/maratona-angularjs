(function(){
    'use strict'

    //MODULO
    angular.module('listaTarefasApp', []);

    //CONTROLLER
    angular.module('listaTarefasApp')
    .controller('listaTarefasController', listaTarefasController);

    //INJECT
    listaTarefasController.$inject = ['$scope'];

    //FUNCTIONS
    function listaTarefasController($scope){
        //ACESSANDO O $SCOPE ATRAVÉS DA VM
        var vm = this;

        vm.tarefas = [
            {text: 'Comprar uma bermuda', feito:true},
            {text: 'Comprar um notebook', feito:false}
        ];

        //VARIÁVEIS
        vm.restam = restam;
        vm.addTarefa = addTarefa;
        vm.arquivar = arquivar;

        //FUNCTIONS INTERNAS
        function restam() {
            var count = 0;
            angular.forEach(vm.tarefas, function (trf) {
                if (!trf.feito) count++;
            });
            return count;
        }

        function addTarefa() {
            vm.tarefas.push({ text: vm.tarefaText, feito: false });
            vm.tarefaText = '';
        }

        function arquivar(){
            vm.tarefas = vm.tarefas.filter(function (trf) { return !trf.feito });
        }

    }
})()