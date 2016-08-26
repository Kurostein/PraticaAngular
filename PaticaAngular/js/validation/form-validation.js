$(function () {
    $(".ui.form")
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
});