(function () {
    'use strict';

    const ClientForm = function () {
        return {
            //scope: {},
            transclude: true,
            templateUrl: './js/directives/views/client.form.view.html',
            controller: 'clientController as vm',
            link: Link
        };

        function Link(scope, element, attrs) {
            ModalEvents(element, '.add.button');
            ModalEvents(element, '.edit.button');
            Validation();
            //$(element).modal('attach events', '.edit.button', 'show');
            //scope.client = clientController.client;
        }

        function ModalEvents(element, attrs) {
            $(element)
                .modal({
                    closable: false
                })
                .modal('attach events', attrs, 'show');
        }

        function Validation() {
            $(".ui.form")
                .form({
                    inline: true,
                    on: 'blur',
                    revalidate: true,
                    fields: {
                        name: {
                            rules: [
                                {
                                    type: 'empty',
                                    prompt: 'The field {name} cannot be empty.'
                                },
                                {
                                    type: 'minLength[3]',
                                    ruleValue: 3
                                }
                            ]
                        },
                        tel: {
                            rules: [
                                {
                                    type: 'empty',
                                    prompt: 'The field {name} cannont be empty.'
                                },
                                {
                                    type: 'minLength[9]',
                                    ruleValue: 9
                                },
                                {
                                    type: 'maxLength[10]',
                                    ruleValue: 10
                                }
                            ]
                        }
                    }
                });
        }
    }

    angular.module('myPizza').directive('clientForm', ClientForm);
})();