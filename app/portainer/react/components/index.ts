import angular from 'angular';

import { customTemplatesModule } from './custom-templates';

export const componentsModule = angular.module(
  'portainer.app.react.components',
  [customTemplatesModule]
).name;
