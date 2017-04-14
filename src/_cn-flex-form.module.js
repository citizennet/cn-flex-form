import cnFlexFormConfigProvider from './cn-flex-form-config.service';
import cnFlexFormTypesProvider from './cn-flex-form-types.service';
import { cnFlexFormRoutesProvider, cnFlexFormRoutes } from './cn-flex-form.routes';
import { schemaFormConfig, addTemplates } from './schema-form-extensions';
import cnFlexFormServiceProvider from './cn-flex-form.service';
import cnFlexFormModalLoaderServiceProvider from './cn-flex-form-modal-loader.service';
import { FlexFormModalLoader, FlexFormModal } from './cn-flex-form-modal-loader';
import cnFlexForm from './cn-flex-form.directive';
import cnFlexFormHeader from './cn-flex-form-header.directive';
import ffValidate from './cn-flex-form-validate.directive';

export default angular
  .module('cn.flex-form', [
    'ui.router',
    'schemaForm',
    'ui.bootstrap.datetimepicker',
    'cnTagsInput',
    'cn.util'
  ])
  .provider('cnFlexFormConfig', cnFlexFormConfigProvider)
  .provider('cnFlexFormTypes', cnFlexFormTypesProvider)
  .provider('cnFlexFormRoutes', cnFlexFormRoutesProvider)
  .config(cnFlexFormRoutes)
  .config(schemaFormConfig)
  .run(addTemplates)
  .provider('cnFlexFormService', cnFlexFormServiceProvider)
  .provider('cnFlexFormModalLoaderService', cnFlexFormModalLoaderServiceProvider)
  .factory('FlexFormModal', FlexFormModal)
  .controller('FlexFormModalLoader', FlexFormModalLoader)
  .directive('cnFlexForm', cnFlexForm)
  .directive('cnFlexFormHeader', cnFlexFormHeader)
  .directive('ffValidate', ffValidate)
  .name;
