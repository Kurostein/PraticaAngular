module.controller("myHelloController",
    function ($scope) {
        $scope.message = "Hello Angular Js!";
        $scope.editmessage = "Write me!";
        $scope.pessoas = [
            { nome: "Alice", tel: "1233-3412" },
            { nome: "Ana", tel: "2342-3122" },
            { nome: "Pedro", tel: "3453-1231" },
            { nome: "Mauro", tel: "4123-1231" },
        ];
        $scope.testChange = testChange;
    });

function testChange() {
    this.message = "Hello Again Angular!!";
}