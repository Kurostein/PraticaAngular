(function () {
    'use strict';

    module.controller("myPizzaController", function ($scope) {
        var controller = $scope;

        var registrationForm = $('.ui.form');

        controller.name = "My Pizza";
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

        controller.order = 'name';
    
        function Add() {
            if (registrationForm.form('is valid')) {
                var client = registrationForm.form('get values');
                controller.clients.push(client);
                registrationForm.form('clear');
            }
            else
                return;
        }

        function Edit(client) {
            controller.editing = true;
            controller.client = client;
            registrationForm.form('set values', client);
        }

        function Save(client) {        
            controller.clients.splice(controller.clients.indexOf(client), 1, registrationForm.form('get values'));
            registrationForm.form('clear');
            controller.editing = false;
            delete controller.client;
        }

        function Delete(client) {
            controller.clients.splice(controller.clients.indexOf(client), 1);
        }

        function OrderBy(colName) {
            controller.order = colName;
            controller.reverse = !controller.reverse;
        }
    });
})();