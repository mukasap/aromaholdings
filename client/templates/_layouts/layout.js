//master
Template.master.onRendered(function(){
	$('body').addClass('hold-transition skin-red layout-top-nav');
	$('body').removeClass('fixed sidebar-mini');

});

//dashboard
Template.dashboard.onRendered(function(){
	$('body').addClass('hold-transition skin-red fixed sidebar-mini');
	$('body').removeClass('layout-top-nav');
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
