(function() {
  'use strict';

  angular.module('cn.flex-form')
      .config(schemaFormConfig)
      .run(addTemplates);

  schemaFormConfig.$inject = ['cnFlexFormServiceProvider'];

  function schemaFormConfig(cnFlexFormServiceProvider) {
    var extensions = [
      'cn-fieldset',
      'cn-toggle',
      'cn-datetimepicker',
      'cn-autocomplete',
      'cn-autocomplete-detailed',
      'cn-currency',
      'cn-radiobuttons',
      'cn-percentage',
      'cn-display'
    ];

    _.each(extensions, function(extension) {
      cnFlexFormServiceProvider.registerField({
        type: extension,
        templateUrl: 'app/components/cn-flex-form/forms/' + extension + '.html'
      });
    });
  }

  addTemplates.$inject = ['$templateCache'];

  function addTemplates($templateCache) {
    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-toggle.html',
        '\
        <div class="form-group {{form.htmlClass}}" \
             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\
          <label class="control-label" ng-show="showTitle()">{{form.title}}</label>\
          <div class="clearfix">\
            <cn-toggle-switch\
              class="pull-left"\
              ng-show="form.key"\
              enabled="$$value$$"\
              on-value="angular.isDefined(form.onValue) ? form.onValue : true"\
              off-value="angular.isDefined(form.offValue) ? form.offValue : false">\
            </cn-toggle-switch>\
            <span ng-show="form.onText && form.offText">\
              {{$$value$$ === form.onValue ? form.onText : form.offText}}\
            </span>\
          </div>\
          <span class="help-block" sf-message="form.description"></span>\
        </div>\
        '
    );

    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-datetimepicker.html',
        '\
        <div class="form-group {{form.htmlClass}}"\
             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\
          <label class="control-label"\
                 for="{{form.key.join(\'.\')}}"\
                 ng-show="showTitle()">{{form.title}}</label>\
          <cn-datetimepicker\
            ng-show="form.key"\
            ng-model="$$value$$"\
            ng-model-options="form.ngModelOptions"\
            is-disabled="form.readonly"\
            sf-changed="form"\
            schema-validate="form"\
            input-id="{{form.key.join(\'.\')}}"\
            min-date="form.minDate"\
            required="form.required"\
            model-type="{{form.schema.type}}">\
          </cn-datetimepicker>\
          <span class="help-block" sf-message="form.description"></span>\
        </div>\
        '
    );

    var sharedAutocompleteTpl = '\
          <tags-input\
            ng-show="form.key"\
            ng-model="$$value$$"\
            ng-model-options="form.ngModelOptions"\
            ng-disabled="form.readonly"\
            sf-changed="form"\
            schema-validate="form"\
            input-id="{{form.key.join(\'.\')}}"\
            display-property="{{form.displayProperty || \'name\'}}"\
            value-property="{{form.valueProperty || \'value\'}}"\
            placeholder="{{form.placeholder || \' \'}}"\
            add-on-blur="false"\
            add-on-comma="false"\
            add-from-autocomplete-only="{{!form.allowNew}}"\
            on-before-tag-added="form.onAdd({value: $tag}, form, $event, $prev)"\
            on-init="form.onInit($tag, form, $event, $setter)"\
            model-type="{{form.getSchemaType()}}"\
            array-value-type="{{form.schema.items.type}}"\
            hide-tags="{{form.detailedList}}"\
            tags-style="{{form.selectionStyle}}"\
            required="{{form.required}}"\
            min-length="{{form.minLength}}"\
            allowed-tags-pattern=".*"\
            dropdown="true"\
            item-formatter="form.itemFormatter"\
            min-tags="{{form.schema.minItems}}"\
            max-tags="{{form.schema.maxItems || form.getSchemaType() !== \'array\' ? 1 : 0}}"\
            allow-bulk="{{form.bulkAdd}}"\
            bulk-delimiter="{{form.bulkDelimiter}}"\
            bulk-placeholder="{{form.bulkPlaceholder}}"\
            show-button="true">\
            <auto-complete\
              source="form.getTitleMap && form.getTitleMap() || form.titleQuery($query)"\
              skip-filtering="{{form.titleQuery ? true : false}}"\
              min-length="{{form.minLookup || (form.titleQuery && 3 || 0)}}">\
            </auto-complete>\
          </tags-input>\
          ';

    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-autocomplete.html',
        '\
        <div class="form-group {{form.htmlClass}}"\
             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\
          <label class="control-label"\
                 for="{{form.key.join(\'.\')}}-input"\
                 ng-show="showTitle()">{{form.title}}</label>\
          ' + sharedAutocompleteTpl + '\
          <span class="help-block" sf-message="form.description"></span>\
        </div>\
        '
    );

    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-autocomplete-detailed.html',
        '\
        <div sf-array="form"\
             class="form-group {{form.htmlClass}}"\
             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\
          <label class="control-label"\
                 for="{{form.key.join(\'.\')}}-input"\
                 ng-show="showTitle()">{{form.title}}</label>\
          <ol class="list-group cn-autocomplete-list"\
              ng-show="modelArray.length"\
              ng-model="modelArray">\
            <li class="list-group-item {{form.fieldHtmlClass}}"\
                ng-repeat="item in modelArray track by $index">\
              <button ng-hide="form.readonly || form.remove === null"\
                      ng-click="deleteFromArray($index)"\
                      type="button" class="close pull-right">\
                <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>\
              </button>\
              <sf-decorator ng-init="arrayIndex = $index" form="copyWithIndex($index)"></sf-decorator>\
            </li>\
          </ol>\
          ' + sharedAutocompleteTpl + '\
          <span class="help-block" sf-message="form.description"></span>\
        </div>\
        '
    );

    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-currency.html',
        '\
        <div class="form-group {{form.htmlClass}}"\
             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\
          <label class="control-label"\
                 ng-show="showTitle()"\
                 for="{{form.key.join(\'.\')}}">{{form.title}}</label>\
          <div class="{{form.fieldClass}} input-group">\
            <label class="input-group-addon"\
                   ng-disabled="form.readonly"\
                   for="{{form.key.join(\'.\')}}">$</label>\
            <input class="form-control"\
                   cn-currency-format="{{form.currencyFormat}}"\
                   ng-show="form.key"\
                   ng-model-options="form.ngModelOptions"\
                   ng-disabled="form.readonly"\
                   sf-changed="form"\
                   schema-validate="form"\
                   ff-validate="form"\
                   type="text"\
                   step="any"\
                   min="{{form.min}}"\
                   max="{{form.max}}"\
                   id="{{form.key.join(\'.\')}}"\
                   name="{{form.key.join(\'.\')}}"\
                   ng-model="$$value$$">\
          </div>\
          <span class="help-block" sf-message="form.description"></span>\
        </div>\
        '
    );

    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-radiobuttons.html',
        '\
        <div class="form-group schema-form-radiobuttons cn-radiobuttons {{form.htmlClass}}"\
             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\
          <label class="control-label" ng-show="showTitle()">{{form.title}}</label>\
          <div class="btn-group clearfix">\
            <label class="btn btn-{{item.value}} {{form.btnClass}} {{item.value === $$value$$ ? \'active\' : \'\'}}"\
                   ng-repeat="item in form.titleMap">\
              <input type="radio"\
                     class="{{form.fieldHtmlClass}} hide"\
                     sf-changed="form"\
                     ng-disabled="form.readonly"\
                     ng-model="$$value$$"\
                     ng-model-options="form.ngModelOptions"\
                     schema-validate="form"\
                     ff-validate="form"\
                     ng-value="item.value"\
                     name="{{form.key.join(\'.\')}}">\
              <i class="fa fa-{{item.value}} fa-lg"></i>\
              <span ng-bind-html="item.name"></span>\
            </label>\
          </div>\
          <span class="help-block" sf-message="form.description"></span>\
        </div>\
        '
    );

    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-percentage.html',
        '\
        <div class="form-group {{form.htmlClass}}"\
             ng-class="{\'has-error\': hasError(), \'has-success\': hasSuccess()}">\
          <label class="control-label"\
                 ng-show="showTitle()"\
                 for="{{form.key && form.key[0]}}">{{form.title}}</label>\
          <div class="{{form.fieldClass}} input-group">\
            <input class="form-control"\
                   cn-percentage-format\
                   ng-show="form.key"\
                   ng-model-options="form.ngModelOptions"\
                   ng-disabled="form.readonly"\
                   sf-changed="form"\
                   schema-validate="form"\
                   type="number"\
                   step="any"\
                   min="{{form.min}}"\
                   max="{{form.max}}"\
                   id="{{form.key && form.key[0]}}"\
                   name="{{form.key && form.key[0]}}"\
                   ng-model="$$value$$">\
             <div class="input-group-addon"\
                    ng-disabled="form.readonly"\
                    for="{{form.key && form.key[0]}}">%</div>\
          </div>\
          <span class="help-block" sf-message="form.description"></span>\
        </div>\
        '
    );

    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-display.html',
        '\
        <div class="form-group cn-display{{form.htmlClass}}">\
          <input ng-show="form.key"\
                 class="form-control"\
                 id="{{form.key.join(\'.\')}}"\
                 name="{{form.key.join(\'.\')}}"\
                 ng-disabled="true"\
                 value="{{form.getDisplay(form.key, form.arrayIndex)}}">\
        </div>\
        '
    );

    $templateCache.put(
        'app/components/cn-flex-form/forms/cn-fieldset.html',
        '\
        <fieldset ng-disabled="form.readonly" class="schema-form-fieldset {{form.htmlClass}}">\
          <legend ng-click="form.toggleCollapse()"\
                  ng-class="{\'sr-only\': !showTitle(), collapsible: form.collapsible}"\
                  ng-mouseenter="form.render = true">\
            <i ng-show="form.collapsible"\
               class="fa fa-caret-{{form.collapsed ? \'right\' : \'down\'}}"></i>\
            {{ form.title }}\
          </legend>\
          <div class="help-block" ng-show="form.description" ng-bind-html="form.description"></div>\
          <div collapse="form.collapsed">\
            <div ng-if="form.render">\
              <sf-decorator ng-repeat="item in form.items" form="item"></sf-decorator>\
            </div>\
          </div>\
        </fieldset>\
        '
    );
  }

})();