//master
Template.master.onRendered(function(){
	$('body').addClass('hold-transition skin-blue layout-top-nav');
	$('body').removeClass('fixed sidebar-mini');

});

//dashboard
Template.dashboard.onRendered(function(){
	$('body').addClass('hold-transition skin-blue fixed sidebar-mini');
	$('body').removeClass('layout-top-nav');
});
