ngDescribe({
  name: 'CN Flex Form Header Directive',
  modules: 'cn.flex-form',
  element: '<cn-flex-form-header ff-header-config="config"></cn-flex-form-header>',
  parentScope: {
    config: {
      title: {
        main: "Test Title"
      }
    }
  },
  tests: function(deps) {
    it('has the right title', function() {
      console.log(deps);
      var scope = deps.element.scope();
      var vm = scope.vm;
      expect(deps.element.getElementsByTagName('h1').html() === 'Test Title');
    });
  }
});