/**
* subNavbar
* @namespace oipa.partials
*/
(function () {
  'use strict';

  angular
    .module('oipa.partials')
    .directive('subNavbar', subNavbar);

  subNavbar.$inject = ['templateBaseUrl'];

  /**
  * @namespace topNavBar
  */
  function subNavbar(templateBaseUrl) {

    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf oipa.partials
    */
    var directive = {
      controller: 'TopNavbarController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        'tabs': '=',
        'selectedTab': '=',
      },
      templateUrl: templateBaseUrl + '/templates/_partials/subnavbar/sub-navbar.html'
    };

    return directive;
  }
})();