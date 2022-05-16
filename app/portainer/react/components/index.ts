import angular from 'angular';

import { fileUploadField } from './file-upload-field';
import { switchField } from './switch-field';

export const componentsModule = angular
  .module('portainer.app.react.components', [])
  .component('fileUploadField', fileUploadField)
  .component('porSwitchField', switchField).name;
