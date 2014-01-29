'use strict';

angular.module('pdApp')
  .controller('MainCtrl', function ($scope) {
    // ToDo: Remove it! Variable for run controller unit test
    $scope.titleText = 'Главная страница';
    $scope.tableData = {
      rows: [
        {id: 1, label: 'row1'},
        {id: 2, label: 'row2'},
        {id: 3, label: 'row3'},
        {id: 4, label: 'row4'}
      ],
      columns: [
        {id: 1, label: 'column1'},
        {id: 2, label: 'column2'},
        {id: 3, label: 'column3'},
        {id: 4, label: 'column4'}
      ]
    };
  })
;
