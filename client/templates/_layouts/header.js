//Master
Template.HeaderMaster.onCreated(function(){
	this.autorun(() => {
    this.subscribe("allDepartments");
  });
})

Template.HeaderMaster.helpers({
	departments: function(){
		return Departments.find({});
	}
});

//Dashboard
Template.HeaderDashboard.events({
	'click .logout': function () {
		 AccountsTemplates.logout();
		 return false;
	}
});
