Template.home.onRendered(function(){
	this.$('#myCarousel').carousel();
});

Template.departmentShow.onCreated(function(){
	this.subscribe('wideBanner');
});

Template.departmentShow.helpers({
	wideBanner: function(){
		return Banners.find({type: 'wide'});
	}
});

Template.pagesShow.onCreated(function(){
	this.subscribe('wideBanner');
});

Template.pagesShow.helpers({
	wideBanner: function(){
		return Banners.find({type: 'wide'});
	}
});

Template.serviceShow.onCreated(function(){
	this.subscribe('wideBanner');
});

Template.serviceShow.helpers({
	wideBanner: function(){
		return Banners.find({type: 'wide'});
	}
});
