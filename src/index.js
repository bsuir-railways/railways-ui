import angular from 'angular';
import resource from 'angular-resource';
import material from 'angular-material';
import messages from 'angular-messages';
import uirouter from 'angular-ui-router';
import formly from 'angular-formly';
import formlyMaterial from 'angular-formly-material';

import 'angular-material/angular-material.css';
import 'material-design-icons';

import Components from './components/components.module';
import Containers from './containers/containers.module';
import Helpers from './helpers/helpers.module';
import Pages from './pages/pages.module';

angular.module('app', [
    resource,
    material,
    messages,
    uirouter,
    formly,
    formlyMaterial,

    Components,
    Containers,
    Helpers,
    Pages,
]).config(($urlRouterProvider, $locationProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/home');

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});
