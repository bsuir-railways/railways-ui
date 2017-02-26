import angular from 'angular';

import HomePage from './home/home.module';
import MainPage from './main/main.module';

export default angular.module('app.pages', [
    HomePage,
    MainPage,
]).name;
