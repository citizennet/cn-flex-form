//angular.module('cn.flex-form')
    //.config(schemaFormConfig)
    //.run(addTemplates);

function schemaFormConfig(cnFlexFormServiceProvider) {
  'ngInject';

  tv4.addFormat({
    'url': data => _.isString(data) && !/^(https?:\/\/.{2}|$)/.test(data) && 'invalid url'
  });

  var extensions = [
    'cn-fieldset',
    'cn-toggle',
    'cn-datetimepicker',
    'cn-autocomplete',
    'cn-autocomplete-detailed',
    'cn-currency',
    'cn-radios',
    'cn-radiobuttons',
    'cn-percentage',
    'cn-display',
    'cn-mediaupload',
    'cn-csvupload',
    'cn-reusable',
    'cn-table'
  ];

  _.each(extensions, function(extension) {
    cnFlexFormServiceProvider.registerField({
      type: extension,
      templateUrl: `app/components/cn-flex-form/forms/${extension}.html`
    });
  });
}

function addTemplates($templateCache) {
  'ngInject';

  $templateCache.put(
      'app/components/cn-flex-form/forms/cn-toggle.html',
      `
      <div class="form-group {{form.htmlClass}}"
           ng-class="{'has-error': hasError(), 'has-success': hasSuccess()}">
        <label class="control-label" ng-show="showTitle()">{{form.title}}</label>
        <div class="clearfix">
          <cn-toggle-switch
            class="pull-left"
            ng-show="form.key"
            ng-model-options="form.ngModelOptions"
            ng-model="$$value$$"
            sf-changed="form"
            schema-validate="form"
            on-value="form.onValue"
            off-value="form.offValue"
            read-only="form.readonly"
            undefined-class="form.undefinedClass"/>
          <span ng-show="form.onText && form.offText">
            {{$$value$$ === form.onValue ? form.onText : form.offText}}
          </span>
        </div>
        <span class="help-block" sf-message="form.description"></span>
      </div>`
  );

  $templateCache.put(
      'app/components/cn-flex-form/forms/cn-datetimepicker.html',
      `
      <div class="form-group {{form.htmlClass}}"
           ng-class="{'has-error': hasError(), 'has-success': hasSuccess()}">
        <label class="control-label"
               for="{{form.key.join('.')}}"
               ng-show="showTitle()">{{form.title}}</label>
        <cn-datetimepicker
          ng-show="form.key"
          ng-model="$$value$$"
          ng-model-options="form.ngModelOptions"
          is-disabled="form.readonly"
          sf-changed="form"
          schema-validate="form"
          input-id="{{form.key.join('.')}}"
          min-date="form.minDate"
          max-date="form.maxDate"
          max-view="{{form.maxView}}"
          cn-date-required="form.required"
          placeholder="{{form.placeholder}}"
          model-type="{{form.schema.type}}"
          model-formatter="form.modelFormatter"
          model-parser="form.modelParser"
          view-formatter="form.viewFormatter"
          view-parser="form.viewParser"
          format-string={{form.dateFormat}}
          icon-class={{form.iconClass}}>
        </cn-datetimepicker>
        <span class="help-block" sf-message="form.description"></span>
      </div>`
  );

  var sharedAutocompleteTpl = `
        <tags-input
          ng-show="form.key"
          ng-model="$$value$$"
          ng-model-options="form.ngModelOptions"
          ng-disabled="form.readonly"
          sf-changed="form"
          schema-validate="form"
          input-id="{{form.key.join('.')}}"
          display-property="{{form.displayProperty || 'name'}}"
          value-property="{{form.valueProperty}}"
          placeholder="{{form.placeholder || ' '}}"
          clear-on-blur="true"
          add-on-comma="false"
          add-from-autocomplete-only="{{!form.allowNew}}"
          on-before-tag-added="form.onAdd({value: $tag}, form, $event, $prev)"
          on-init="form.onInit($tag, form, $event, $setter)"
          model-type="{{form.getSchemaType()}}"
          array-value-type="{{form.schema.items.type}}"
          hide-tags="{{form.detailedList}}"
          tags-style="{{form.selectionStyle}}"
          required="{{form.required}}"
          min-length="{{form.minLength}}"
          allowed-tags-pattern=".*"
          dropdown-icon="true"
          item-formatter="form.itemFormatter"
          min-tags="{{form.schema.minItems}}"
          max-tags="{{form.schema.maxItems || form.getSchemaType() !== 'array' ? 1 : 0}}"
          allow-bulk="{{form.bulkAdd}}"
          bulk-delimiter="{{form.bulkDelimiter}}"
          bulk-placeholder="{{form.bulkPlaceholder}}"
          show-clear-all="{{form.showClearAll}}"
          show-button="true">
          <auto-complete
            source="form.getTitleMap && form.getTitleMap() || form.titleQuery($query)"
            skip-filtering="{{form.titleQuery ? true : false}}"
            min-length="{{form.minLookup || (form.titleQuery && 3 || 0)}}">
          </auto-complete>
        </tags-input>`;

  $templateCache.put(
      'app/components/cn-flex-form/forms/cn-autocomplete.html',
      `
      <div class="form-group {{form.htmlClass}}"
           ng-class="{'has-error': hasError(), 'has-success': hasSuccess()}">
        <label class="control-label"
               for="{{form.key.join('.')}}-input"
               ng-show="showTitle()">{{form.title}}</label>
        ${sharedAutocompleteTpl}
        <span class="help-block" sf-message="form.description"></span>
      </div>`
  );

  $templateCache.put(
      'app/components/cn-flex-form/forms/cn-autocomplete-detailed.html',
      `
      <div class="form-group {{form.htmlClass}}"
           ng-class="{'has-error': hasError(), 'has-success': hasSuccess()}">
        <label class="control-label"
               for="{{form.key.join('.')}}-input"
               ng-show="showTitle()">{{form.title}}</label>
        <div sf-array="form">
          <ol class="list-group cn-autocomplete-list"
              ng-if="modelArray.length"
              ng-model="modelArray">
            <li class="list-group-item {{form.fieldHtmlClass}}"
                ng-repeat="item in modelArray">
              <button ng-hide="form.readonly || form.remove === null"
                      ng-click="deleteFromArray($index)"
                      type="button" class="close pull-right">
                <span aria-hidden="true">&times;</span>
              </button>
              <sf-decorator form="copyWithIndex($index)"/>
            </li>
          </ol>
        </div>
        ${sharedAutocompleteTpl}
        <span class="help-block" sf-message="form.description"></span>
      </div>`
  );

  $templateCache.put(
      'app/components/cn-flex-form/forms/cn-currency.html',
      `
      <div class="form-group {{form.htmlClass}}"
           ng-class="{'has-error': hasError(), 'has-success': hasSuccess()}">
        <label class="control-label"
               ng-show="showTitle()"
               for="{{form.key.join('.')}}">{{form.title}}</label>
        <div class="{{form.fieldClass}} input-group">
          <label class="input-group-addon"
                 ng-disabled="form.readonly"
                 for="{{form.key.join('.')}}">$</label>
          <input class="form-control"
                 cn-currency-format="{{form.currencyFormat}}"
                 cn-currency-placeholder="{{form.placeholder}}"
                 ng-show="form.key"
                 ng-model-options="form.ngModelOptions"
                 ng-disabled="form.readonly"
                 sf-changed="form"
                 schema-validate="form"
                 type="text"
                 step="any"
                 min="{{form.min}}"
                 max="{{form.max}}"
                 id="{{form.key.join('.')}}"
                 name="{{form.key.join('.')}}"
                 ng-model="$$value$$">
        </div>
        <span class="help-block" sf-message="form.description"></span>
      </div>`
  );

  $templateCache.put(
      'app/components/cn-flex-form/forms/cn-radios.html',
      `<div class="form-group {{form.htmlClass}}"
            ng-class="{'has-error': hasError(), 'has-success': hasSuccess()}">
         <label class="control-label" ng-show="showTitle()">{{form.title}}</label>
         <div class="btn-group clearfix">
           <label class="radio radio-block"
                  ng-repeat="item in form.titleMap">
             <input type="radio"
                    sf-changed="form"
                    ng-disabled="form.readonly"
                    ng-model="$$value$$"
                    ng-model-options="form.ngModelOptions"
                    schema-validate="form"
                    ff-validate="form"
                    ng-value="item.value"
                    name="{{form.key.join('.')}}">
             <span class="radio-block-icon" ng-if="item.iconClass">
               <i class="fa fa-{{item.iconClass}} fa-lg"></i>
             </span>
             <span ng-bind-html="item.name"></span>
           </label>
         </div>
         <span class="help-block" sf-message="form.description"></span>
       </div>`
  );

  $templateCache.put(
      'app/components/cn-flex-form/forms/cn-radiobuttons.html',
      `
      <div class="form-group schema-form-radiobuttons cn-radiobuttons {{form.htmlClass}}"
           ng-class="{'has-error': hasError(), 'has-success': hasSuccess()}">
        <label class="control-label" ng-show="showTitle()">{{form.title}}</label>
        <div class="btn-group clearfix">
          <label class="btn btn-{{item.value}} {{form.btnClass}} {{item.value === $$value$$ ? 'active' : ''}}"
                 ng-repeat="item in form.titleMap">
            <input type="radio"
                   class="{{form.fieldHtmlClass}} hide"
                   sf-changed="form"
                   ng-disabled="form.readonly"
                   ng-model="$$value$$"
                   ng-model-options="form.ngModelOptions"
                   schema-validate="form"
                   ff-validate="form"
                   ng-value="item.value"
                   name="{{form.key.join('.')}}">
            <i class="fa fa-{{item.value}} fa-lg"></i>
            <span ng-bind-html="item.name"></span>
          </label>
        </div>
        <span class="help-block" sf-message="form.description"></span>
      </div>`
  );

  $templateCache.put(
      'app/components/cn-flex-form/forms/cn-percentage.html',
      `
      <div class="form-group {{form.htmlClass}}"
           ng-class="{'has-error': hasError(), 'has-success': hasSuccess()}">
        <label class="control-label"
               ng-show="showTitle()"
               for="{{form.key && form.key[0]}}">{{form.title}}</label>
        <div class="{{form.fieldClass}} input-group">
          <input class="form-control"
                 cn-percentage-format
                 ng-show="form.key"
                 ng-model-options="form.ngModelOptions"
                 ng-disabled="form.readonly"
                 sf-changed="form"
                 schema-validate="form"
                 type="number"
                 step="any"
                 min="{{form.min}}"
                 max="{{form.max}}"
                 id="{{form.key && form.key[0]}}"
                 name="{{form.key && form.key[0]}}"
                 ng-model="$$value$$">
           <div class="input-group-addon"
                  ng-disabled="form.readonly"
                  for="{{form.key && form.key[0]}}">%</div>
        </div>
        <span class="help-block" sf-message="form.description"></span>
      </div>`
  );

  $templateCache.put(
      'app/components/cn-flex-form/forms/cn-display.html',
      `
      <div class="form-group cn-display{{form.htmlClass}}">
        <input ng-show="form.key"
               class="form-control"
               id="{{form.key.join('.')}}"
               name="{{form.key.join('.')}}"
               ng-disabled="true"
               value="{{form.getDisplay(form.key, form.arrayIndex)}}">
      </div>`
  );

  $templateCache.put(
      'app/components/cn-flex-form/forms/cn-fieldset.html',
      `
      <fieldset 
        ng-disabled="form.readonly"
        class="schema-form-fieldset {{form.htmlClass}}"
        ng-class="{'borderless': form.pos === 0}">
        <legend ng-click="form.toggleCollapse(form)"
                ng-class="{'sr-only': !showTitle(), collapsible: form.collapsible}"
                ng-mouseenter="form.render = true">
          <i ng-show="form.collapsible"
             class="fa fa-caret-{{form.collapsed ? 'right' : 'down'}}"></i>
          {{ form.title }}
        </legend>
        <div class="help-block" ng-show="form.description" ng-bind-html="form.description"></div>
        <div uib-collapse="form.collapsed">
          <div ng-if="form.render">
            <sf-decorator ng-repeat="item in form.items" form="item"/>
          </div>
        </div>
      </fieldset>`
  );

  $templateCache.put(
      'app/components/cn-flex-form/forms/cn-mediaupload.html',
      `
      <div class="form-group {{form.htmlClass}}"
           ng-class="{'has-error': hasError(), 'has-success': hasSuccess()}">
        <label class="control-label"
               ng-show="showTitle()"
               for="{{form.key && form.key[0]}}">{{form.title}}</label>
        <media-upload ng-model="$$value$$"
                      cn-disabled="form.readonly"
                      cn-file-type="form.fileType"
                      cn-upload-path="form.uploadPath"
                      cn-data="form.data"
                      cn-preview-path="form.previewPath"
                      cn-model-value-key="form.modelValueKey"
                      cn-existing-preview="form.existingPreview"
                      ng-model-options="form.ngModelOptions"
                      sf-changed="form"
                      schema-validate="form"
                      ff-form="form"
                      class="clearfix">
        </media-upload>
        <span class="help-block" sf-message="form.description"></span>
     </div>`
  );

  $templateCache.put(
      'app/components/cn-flex-form/forms/cn-csvupload.html',
      `
      <div class="form-group {{form.htmlClass}}"
           ng-class="{'has-error': hasError(), 'has-success': hasSuccess()}">
        <label class="control-label"
               ng-show="showTitle()"
               for="{{form.key && form.key[0]}}">{{form.title}}</label>
        <csv-upload ng-model="$$value$$"
                      cn-upload-path="form.uploadPath"
                      ng-model-options="form.ngModelOptions"
                      sf-changed="form"
                      schema-validate="form"
                      ff-form="form"
                      class="clearfix">
        </csv-upload>
        <span class="help-block" sf-message="form.description"></span>
     </div>`
  );

  $templateCache.put(
      'app/components/cn-flex-form/forms/cn-reusable.html',
      `
      <div class="form-group cn-reusable {{form.htmlClass}}"
           ng-class="{'has-error': hasError(), 'has-success': hasSuccess()}">
        <label class="control-label"
               ng-show="showTitle()"
               for="{{form.key.join('.')}}">{{form.title}}</label>
        <cn-select-or
          ng-show="form.key"
          select-from="form.library"
          ng-model="$$value$$"
          ng-model-options="form.ngModelOptions"
          sf-changed="form"
          schema-validate="form"
          ff-form="form"
          directiveId="form.directiveId"
          item-template="form.itemTemplate"
          toggle-text="form.toggleText"
          disabled="form.readonly"
          view="form.view">
          <sf-decorator ng-repeat="item in form.items" form="item"/>
        </cn-select-or>
        <p ng-if="form.loadMore && form.view === 'list'">
          <a ng-click="form.loadMore()"
             class="btn btn-default btn-block">Load More</a>
        </p>
        <span class="help-block" sf-message="form.description"></span>
      </div>`
  );

  $templateCache.put(
      'app/components/cn-flex-form/forms/cn-table.html',
      `
      <div class="form-group cn-ff-table {{form.htmlClass}}"
           ng-class="{'has-error': hasError(), 'has-success': hasSuccess()}">
        <h6>{{form.title}}</h6>
        <div class="row">
          <div ng-repeat="col in form.columns" class="{{col.columnWidth}}">
            <p class="column-header">{{col.columnHeader}}</p>
          </div>
        </div>
        <div class="row" ng-repeat="row in form.items">
          <div ng-repeat="col in row.items" class="{{col.columnWidth}}">
            <sf-decorator form="col"></sf-decorator>
          </div>
        </div>
        <span class="help-block" sf-message="form.description"></span>
      </div>`
  );
}

export { schemaFormConfig, addTemplates };
