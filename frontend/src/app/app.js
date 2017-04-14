import angular from 'angular';
import Components from './components/components';
import services from './services/services';
import 'normalize.css';

import AppComponent from './app.component';

angular.module('app', [
  Components.name,
  services.name
])
  .component('app', AppComponent)
  // .config(($stateProvider) => {
  //   $stateProvider
  //     .state('home', {
  //       url: '/',
  //       template: require('./main/templates/main.html'),
  //       controller: 'MainController',
  //       controllerAs: 'main',
  //       resolve: {
  //         // file: (resolve file here) => {
  //  //       'ngInject';
  //       }
  //     });
  // });

angular.bootstrap(document.body, ['app'])
