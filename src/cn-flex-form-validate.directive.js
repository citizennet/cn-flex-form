function ffValidate() {
  return {
    restrict: 'A',
    scope: { form: '=ffValidate' },
    require: 'ngModel',
    link: link
  };
}

function link($scope, elem, attrs, ngModel) {
  function ffValidateTag() {}
  $scope.__tag = new ffValidateTag();

  if($scope.form && $scope.form.required) {
    $scope.$watch(function() { return ngModel.$viewValue; }, function(value) {
      // override schemaForm validation
      ngModel.$setValidity('schemaForm', true);
      ngModel.$setValidity('tv4-302', value);
    });
  }
}

export default ffValidate;
