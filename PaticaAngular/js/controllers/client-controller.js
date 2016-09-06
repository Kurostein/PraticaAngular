(function () {
    'use strict';

    const ClientController = function ($scope, $http, $q) {
        var vm = this;
        var url = 'http://localhost:2020/';

        vm.client = { name: 'test', tel: '123123123'};

        vm.add = Add;

        function Add(client) {
            //if (registrationForm.form('is valid')) {
            //    var client = registrationForm.form('get values');
            //var client = vm.client;
                PostClient(client, 'client')
                    .then(function (status) {
                        if (status === 200) {
                            //controller.clients.push(client);
                            //registrationForm.form('clear');
                            //ListClients();
                        } else {
                            alert('Error to insert client.');
                            //ListClients();
                        }
                    });
            //} else
            //    return;
        }

        function PostClient(client, serviceUrl) {
            var json = JSON.stringify(client);
            var deferred = $q.defer();

            $http.post(url.concat(serviceUrl), json)
            .success(function (data, status) {
                deferred.resolve(status);
                console.log('Deu certo!!');
            }).error(function (data, status) {
                deferred.reject(status);
                console.log('Deu erro...');
            });

            return deferred.promise;
        }
    }

    ClientController.$inject = ['$scope', '$http', '$q'];

    angular.module('myPizza').controller('clientController', ClientController);
})();