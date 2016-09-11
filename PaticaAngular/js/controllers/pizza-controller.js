(function () {
    'use strict';

    module.controller("myPizzaController", function ($scope, $http, $q) {
        var controller = $scope;
        var url = 'http://localhost:2020/';

        var registrationForm = $('.ui.form');

        controller.name = "My Pizza";
        
        controller.client = {};
        controller.clients = [
            { name: "Peter", tel: "1234-1231" },
            { name: "Ann", tel: "2342-2341" },
            { name: "Joel", tel: "1231-1241" },
            { name: "Mary", tel: "1241-4123" }
        ];
     
        controller.add = Add;
        controller.edit = Edit;
        controller.save = Save;
        controller.delete = Delete;
        controller.orderBy = OrderBy;
        controller.list = ListClients();

        controller.order = 'name';
    
        function ListClients() {
            HttpGet().then(function (data) {
                controller.clients = data;
            });            
        }

        function HttpGet() {
            var serviceUrl = 'client';
            var deferred = $q.defer();
            $http.get(url.concat(serviceUrl))
                .success(function (data, status) {
                    deferred.resolve(data);
                    console.log(status + ' Listou!');
                })
                .error(function (data, status) {
                    deferred.reject(status);
                    console.log(status + ' Erro na lista!');
                });
            return deferred.promise;
        }

        function Add(client) {
            controller.client = client;
            PostClient(client, 'client')
                .then(function (status) {
                    if (status === 200) {
                        //controller.clients.push(client);
                        registrationForm.form('clear');
                        ListClients();
                    } else {
                        alert('Error to insert client.');
                        ListClients();
                    }
                });
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

        function PutClient(client, serviceUrl) {
            var json = JSON.stringify(client);
            var deferred = $q.defer();

            $http.put(url.concat(serviceUrl), json)
            .success(function (data, status) {
                deferred.resolve(status);
                console.log('Deu certo!!');
            }).error(function (data, status) {
                deferred.reject(status);
                console.log('Deu erro...');
            });

            return deferred.promise;
        }

        function Edit(client) {
            controller.editing = true;
            controller.client = client;
            registrationForm.form('set values', client);
        }

        function Save() {        
            var editedClient = registrationForm.form('get values');
            editedClient.id = controller.client.id;
            //controller.clients.splice(controller.clients.indexOf(client), 1, editedClient);
            PutClient(editedClient, 'client')
                .then(function (status) {
                    if (status === 200) {
                        registrationForm.form('clear');
                        controller.editing = false;
                        delete controller.client;
                        ListClients();
                    } else {
                        alert("Update error.");
                        registrationForm.form('clear');
                        controller.editing = false;
                        delete controller.client;
                        ListClients();
                    }
                });
        }

        function HttpDelete(id, serviceUrl) {
            var deferred = $q.defer();

            $http.delete(url.concat(serviceUrl).concat('/' + id))
                .success(function (data, status) {
                    deferred.resolve(status);
                    console.log(status + 'Deu certo!');
                })
                .error(function (data, status) {
                    deferred.reject(status);
                    console.log(status + "Erro!!");
                });
            return deferred.promise;
        }

        function Delete(client) {
            HttpDelete(client.id, 'client');
            setTimeout(ListClients, 500);
            
            //controller.clients.splice(controller.clients.indexOf(client), 1);
        }

        function OrderBy(colName) {
            controller.order = colName;
            controller.reverse = !controller.reverse;
        }
    });
})();