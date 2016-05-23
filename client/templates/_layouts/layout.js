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

Template.sidebar.onCreated(function(){
	this.subscribe('allDepartments');
});

Template.sidebar.helpers({
	departments: function () {
		return Departments.find();
	}
});

Template.mediumBanner.onCreated(function(){
	this.subscribe('mediumBanner');
});

Template.mediumBanner.helpers({
	banner: function(){
		return Banners.find({type: 'medium'}, {limit: 1});
	}
});

Template.departmentShow.onCreated(function(){
	this.subscribe('wideBanner');
});

Template.departmentShow.helpers({
	banner: function(){
		return Banners.find({type: 'wide'}, {limit: 1});
	}
});

Template.serviceShow.onCreated(function(){
	this.subscribe('wideBanner');
});

Template.serviceShow.helpers({
	banner: function(){
		return Banners.find({type: 'wide'}, {limit: 1});
	}
});

Template.serviceShow.onCreated(function(){
	this.subscribe('wideBanner');
});

Template.serviceShow.helpers({
	banner: function(){
		return Banners.find({type: 'wide'}, {limit: 1});
	}
});

Template.pagesShow.onCreated(function(){
	this.subscribe('wideBanner');
});

Template.pagesShow.helpers({
	banner: function(){
		return Banners.find({type: 'wide'}, {limit: 1});
	}
});

Template.footer_master.events({
	'click .logout': function () {
		AccountsTemplates.logout();
		return false;
	}
});