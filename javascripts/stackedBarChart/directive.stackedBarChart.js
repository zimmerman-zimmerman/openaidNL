/**
* stackedBarChart
* @namespace oipa.stackedBarChart
*/
(function () {
  'use strict';

  angular
    .module('oipa.stackedBarChart')
    .directive('stackedBarChart', stackedBarChart);

  stackedBarChart.$inject = ['templateBaseUrl','$http'];

  /**
  * @namespace stackedBarChart
  */
  function stackedBarChart(templateBaseUrl) {

    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf oipa.stackedBarChart
    */
    var directive = {
      controller: 'StackedBarChartController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        endpoint: '@',
        groupBy: '@',
        aggregationKey: '@',
        timeSlider: '=',
        sourceUrl: '@'
      },
      templateUrl: templateBaseUrl + '/templates/stackedBarChart/stacked-bar-chart.html'
    };

    return directive;
  }
})();