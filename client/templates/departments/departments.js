Template.adminDepartments.events({
	'click .delete': function () {
		Departments.remove({_id: this._id});
		return false;
	}
});

AutoForm.hooks({
insertDepartment: {
    onSuccess: function () {
      this.event.preventDefault();
      Router.go('admin.departments');
      FlashMessages.sendSuccess('Department Added');
      return false;
    }
  },
  updateDepartment: {
    onSuccess: function () {
      this.event.preventDefault();
      Router.go('admin.departments');
      FlashMessages.sendSuccess('Department Updated');
    }
  },
});