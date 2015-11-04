# cn-flex-form
Flex Form library by CitizenNet

# Installation

## 1. bower
To get started, install CitizenNet's `cn-tags-input`, `angular-schema-form` fork
and `cn-flex-form`:

    bower install https://github.com/citizennet/cn-tags-input.git\#master --save-dev
    bower install https://github.com/citizennet/angular-schema-form.git\#master --save-dev
    bower install https://github.com/citizennet/cn-flex-form.git\#master --save-dev

## 2. grunt/gulp
Make sure to add the necessary files to your `grunt` or `gulp` build.
For `cn-tags-input` you'll want:

    "dist/all.min.js"

For `angular-schema-form`:

    "dist/schema-form.min.js",
    "dist/bootstrap-decorator.min.js"


And for `cn-flex-form`:

    "dist/all.min.js"

## 3. angular
And last be sure to add it as a dependency for your angular app:

    angular.module("yourapp", ["cn.flex-form"]);

# Usage
Controller:

    vm.config = {
        formCtrl: vm.ffForm,
        schema: vm.schema,
        getSchema: vm.getSchema
    };

Template:

    <form name="vm.ffForm">
        <cn-flex-form
            ff-config="vm.config"
            ff-model="vm.model"
        </cn-flex-form>
    </form>
