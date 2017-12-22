# CitizenNet Flex Form Library [![CircleCI](https://circleci.com/gh/citizennet/cn-flex-form.svg?style=badge)](https://circleci.com/gh/citizennet/cn-flex-form)
Flexible form-building library by CitizenNet

## Contributing
To get started run to download all dependencies:

    yarn install

### Testing & Development
Add any test to the `/test` folder, it is recommended to write tests before adding or modifying any methods.

You can use a watch script to automatically build and test your files when any are modified.

    yarn run watch

Alternatively you can individually run `yarn run test` or `yarn run build` to run either script independently, though it
is not recommended to ever build without making sure all tests pass.

## Installation

### Dependencies
This library depends on a few others that you'll have to import into your scripts or include in your build, they are:

    https://github.com/citizennet/cn-util.git
    https://github.com/citizennet/cn-datetimepicker.git
    https://github.com/citizennet/cn-tags-input.git
    https://github.com/citizennet/angular-schema-form.git


### Using
Add it as a dependency for your angular app:

    angular.module("yourapp", ["cn.flex-form"]);

Define the form config in your controller:

    vm.config = {
        formCtrl: vm.ffForm,
        schema: vm.schema,
        getSchema: vm.getSchema
    };

Invoke the form in your template:

    <div name="{{vm.ffForm}}">
        <cn-flex-form
            ff-config="vm.config"
            ff-model="vm.model"
        </cn-flex-form>
    </div>
