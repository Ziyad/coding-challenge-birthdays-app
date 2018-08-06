var app = angular.module('BirthdaysApp', ['ngMaterial', 'ngMessages']);

app.service(
    'birthdays',
    function($http) {
        this.getBirthdays = function(filter, cb) {
            $http({
                url: '/api/birthdays',
                method: "GET",
                params: filter
            }).then(function (response) {
                cb(null, response);
            });
        };
    }
);

app.controller('BirthdaysListCtrl', function($scope, birthdays) {
    birthdays.getBirthdays(
        {},
        function(err, response) {
            $scope.allBirthdays = response.data;
        }
        );

    var from = moment().subtract(1,'days').startOf('day');
    var to = moment().subtract(1,'days').endOf('day');
    console.log("from: " + from + " to: " + to);
    birthdays.getBirthdays(
        {
            from: from,
            to: to
        },
        function(err, response) {
            $scope.todaysBirthdays = response.data;
        }
    )
});
