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
Make sure you have dependencies installed
```bash
yarn install
```
To build
```bash
yarn build
```
To watch for file changes and automatically apply them to the relevant service (wildcat will be this example--could also be quicksight)
```bash
bower link
yarn run watch
cd ~/src/wildcat
bower link cn-batch-forms
npx gulp watch
```

## Creating a New Release and Applying It
1. Click "Releases" in the menu at the top of the repo.
2. ![Github Workflow - Step 9](https://user-images.githubusercontent.com/26187383/169494986-64375e44-7458-4282-a276-d913e02b35a4.jpeg)
3. ![Github Workflow - Step 10](https://user-images.githubusercontent.com/26187383/169495049-935da645-cc7e-4fc7-8597-f1716fe0f0d1.jpeg)
4. type the next logical version into the tag
![Github Workflow - Step 12](https://user-images.githubusercontent.com/26187383/169495255-a6bc9331-c3aa-4cf4-b41f-e04133c42567.jpeg)
5. Enter the same tag version string into the Release Title 
![Github Workflow - Step 13](https://user-images.githubusercontent.com/26187383/169495426-f4d2f5f7-7dfa-4b5e-af43-5d6d04dc7bfb.jpeg)
6. ![Github Workflow - Step 17](https://user-images.githubusercontent.com/26187383/169495611-12d4af80-8c75-4540-b10d-fe58a9c04390.jpeg)
7. Go to any service that requires this package in its `bower.json` or any other dependency-documenting file and bump the version!

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
