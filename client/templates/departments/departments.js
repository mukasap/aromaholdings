Template.departmentList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('allDepartments');
	});
});


Template.departmentList.helpers({
	departments: function () {
		return Departments.find();
	}
});

Template.departmentList.events({
	'click .delete': function () {
		Departments.remove({_id: this._id});
		return false;
	}
});

//edit
Template.departmentEdit.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		self.subscribe('singleDepartment', id);
	});
});

Template.departmentEdit.helpers({
	department: function () {
		var id = FlowRouter.getParam('id');
		return Departments.findOne({_id: id});
	}
});

AutoForm.hooks({
insertDepartment: {
    onSuccess: function () {
      FlowRouter.go('admin.departments');
      FlashMessages.sendSuccess('Department Added');
      return false;
    }
  },
  updateDepartment: {
    onSuccess: function () {
      FlowRouter.go('admin.departments');
      FlashMessages.sendSuccess('Department Updated');
      return false;
    }
  },
});