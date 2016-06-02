Template.SidebarMaster.onCreated(function(){
  this.autorun(() => {
    this.subscribe("allDepartments");
  });
});

Template.SidebarMaster.helpers({
	departments: function () {
		return Departments.find({});
	}
});

Template.Banner300.onCreated(function(){
	this.autorun(() => {
    this.subscribe('mediumBanner');
  });
});

Template.Banner300.helpers({
	banner: function(){
		return Banners.find({type: 'medium'}, {limit: 1});
	}
});
