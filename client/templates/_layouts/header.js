//Master
Template.HeaderMaster.onCreated(function(){
	this.autorun(() => {
    this.subscribe("allDepartments");
  });
})

Template.HeaderMaster.helpers({
	departments: function(){
		return Departments.find({});
	},
	services: function(){
		return Services.find({department: this._id});
	}
});

//Dashboard
Template.HeaderDashboard.events({
	'click .logout': function () {
		 AccountsTemplates.logout();
		 return false;
	}
});
