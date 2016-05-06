//header
Template.header_master.helpers({
	AppTitle: function () {
		return Session.get('AppTitle');
	}, 
	departments: function(){
		return Departments.find();
	}
});

//header Admin
Template.header_dashboard.helpers({
	AppTitle: function () {
		return Session.get('AppTitle');
	}
});

//master
Template.master.onRendered(function(){
	$('body').addClass('hold-transition skin-blue layout-top-nav');
	$('body').removeClass('fixed sidebar-mini');
	Session.set('AppTitle', 'Aroma Holdings');

});

//dashboard
Template.dashboard.onRendered(function(){
	$('body').addClass('hold-transition skin-blue fixed sidebar-mini');
	$('body').removeClass('layout-top-nav');
	Session.set('AppTitle', 'Dashboard');
});

Template.sidebar.helpers({
	departments: function () {
		return Departments.find();
	}
});