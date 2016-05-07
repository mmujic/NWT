app.controller("LoginController", ['$scope', '$log', '$window', '$http',
    function ($scope, $log, $window, $http) {

        $scope.csrfValue = $window.document.getElementsByName('_csrf')[0].content;

        $scope.error = false;

        $scope.user = {
            username: "",
            password: ""
        };

        $scope.login = function(event) {
            user = $scope.user;
            event.preventDefault();
            if(user.username == null || user.username == "" || user.password == null || user.password == "") {
                $scope.error = true;
                return;
            }

            $http.post('/user/login', user, {  headers: { 'Content-Type': 'application/json' } }
                ).success(function () {
                    angular.element(loginForm)[0].submit();
                }).error(function (data, status, headers, config) {
                    $log.log(data, status, headers, config);
                    $scope.error = true;
                    return;
                });
        }
    }]);