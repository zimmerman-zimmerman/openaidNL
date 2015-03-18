/**
* Collection
* @namespace oipa.filters.directives
*/
(function () {
  'use strict';

  angular
    .module('oipa.navbar.directives')
    .directive('topNavbar', topNavbar);

  topNavbar.$inject = ['templateBaseUrl'];

  /**
  * @namespace Collection
  */
  function topNavbar(templateBaseUrl) {

    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf ncs.collections.directives.Collection
    */
    var directive = {
      restrict: 'E',
      scope: {
        collection: '='
      },
      templateUrl: templateBaseUrl + '/templates/layout/navbar.html'
    };

    return directive;
  }
})();