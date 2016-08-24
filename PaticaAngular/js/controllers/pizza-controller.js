module.controller("myPizzaController", function ($scope) {
    var controller = $scope;

    controller.name = "My Pizza";
    controller.clients = [
        { name: "Peter", tel: "1234-1231" },
        { name: "Ann", tel: "2342-2341" },
        { name: "Joel", tel: "1231-1241" },
        { name: "Mary", tel: "1241-4123" }
    ];
});