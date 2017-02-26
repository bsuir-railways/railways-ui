import angular from 'angular';

import HomeTemplate from './home.template.html';

export default angular.module('app.pages.home', [

]).config(($stateProvider) => {
    'ngInject';

    $stateProvider
        .state('main.home', {
            url: 'home',
            views: {
                content: {
                    template: HomeTemplate
                }
            }
        });
}).name;
