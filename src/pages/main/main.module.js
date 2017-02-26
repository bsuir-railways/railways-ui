import angular from 'angular';

import MainTemplate from './main.template.html';

export default angular.module('app.pages.main', [

]).config(($stateProvider) => {
    'ngInject';

    $stateProvider
        .state('main', {
            abstract: true,
            url: '/',
            views: {
                main: {
                    template: MainTemplate
                }
            }
        });
}).name;
