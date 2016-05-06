//Departments
Meteor.publish('allDepartments', function(){
	//role based security
	return Departments.find();
});

Meteor.publish('singleDepartments', function(id){
	//role based security
	return Departments.findOne({_id: id});
});

//Services
Meteor.publish('allServices', function(){
	//role based security
	return Services.find();
});

Meteor.publish('singleService', function(id){
	//role based security
	return Services.findOne({_id: id});
});
//Services
Meteor.publish('allCarousels', function(){
	//role based security
	return Carousel.find();
});

Meteor.publish('singleCarousel', function(id){
	//role based security
	return Carousel.findOne({_id: id});
});

Meteor.publish('homeCarousel', function(id){
	//role based security
	return Carousel.findOne({name: 'home'});
});

//Pages
Meteor.publish('allPages', function(){
	//role based security
	return Pages.find();
});

Meteor.publish('singlePage', function(id){
	//role based security
	return Pages.findOne({_id: id});
});

Meteor.publish('aboutPage', function(id){
	//role based security
	return Pages.findOne({slug: 'about-us'});
});

//Staff
Meteor.publish('allStaff', function(){
	//role based security
	return Staff.find();
});

Meteor.publish('singleStaff', function(id){
	//role based security
	return Staff.findOne({_id: id});
});

//Staff
Meteor.publish('allCallouts', function(){
	//role based security
	return Callouts.find({}, {limit: 3});
});

Meteor.publish('singleCallout', function(id){
	//role based security
	return Callouts.findOne({_id: id});
});

//tips
Meteor.publish('allTips', function(){
	//role based security
	return Tips.find({}, {limit: 3});
});

Meteor.publish('singleTip', function(id){
	//role based security
	return Tips.findOne({_id: id});
});

Meteor.publish('randomTip', function(id){
	//get random ID by section
	return Tips.findOne({_id: id});
});

Meteor.publish('images', function(){
	return Images.find();
});