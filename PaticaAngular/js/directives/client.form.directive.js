(function () {
    'use strict';

    const ClientForm = function () {
        return {
            restrict: 'E',
            scope: {
                model: '=clientModel',
                submit: '&submitAction',
                edit: '=editMode'
            },
            templateUrl: './js/directives/views/client.form.view.html',            
            link: Link
        };

        function Link(scope, element, attrs) {
            var elem = $(element);

            scope.save = function(){
                if(elem.form('is valid')){
                    scope.submit({client: scope.model});
                }else{
                    alert('Formulário inválido!');
                }
            }

            scope.cancel = function(){
                elem.form('clear');
                scope.client = {};
            }

            AddValidation(element);
        }
        
        function AddValidation(element) {
            $(element)
                .form({
                    inline: true,
                    on: 'blur',
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