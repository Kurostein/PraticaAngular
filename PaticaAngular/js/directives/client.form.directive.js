(function () {
    'use strict';

    const ClientForm = function () {
        return {
            scope: {},
            templateUrl: './js/directives/views/client.form.view.html',
            //controller: 'clientController as vm',
            link: Link
        };

        function Link(scope, element, attrs, clientController) {
            ModalEvents('.add.button');
            ModalEvents('.edit.button');
            //$(element).modal('attach events', '.edit.button', 'show');
            scope.client = clientController.client;
        }

        function ModalEvents(attrs) {
            $(element)
                .modal({
                    closable: false,
                    onDeny: function () { console.log('cancelou'); },
                    onApprove: clientController.add(scope.client)
                })
                .modal('attach events', attrs, 'show');
        }
    }

    angular.module('myPizza').directive('clientForm', ClientForm);
})();