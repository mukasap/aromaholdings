//Departments
Meteor.publish('allDepartments', function(){
	//role based security
	return Departments.find({}, {sort: {updatedAt: 1}});
});

Meteor.publish('homeDepartments', function(){
	//role based security
	return Departments.find({}, {limit: 3});
});

Meteor.publish('singleDepartment', function(id){
	//role based security
	console.log(id);
	return Departments.find({_id: id});

});

//Services
Meteor.publish('allServices', function(){
	//role based security
	return Services.find();
});

Meteor.publish('singleService', function(id){
	//role based security
	return Services.find({_id: id});
});

Meteor.publish('slugService', function(slug){
	//role based security
	return Services.find({slug: slug});
});
//Services
Meteor.publish('allCarousels', function(){
	//role based security
	return Carousel.find();
});

Meteor.publish('singleCarousel', function(id){
	//role based security
	return Carousel.find({_id: id});
});

Meteor.publish('homeCarousel', function(){
	//role based security
	return Carousel.find({name: 'home'});
});

//Pages
Meteor.publish('allPages', function(){
	//role based security
	return Pages.find();
});

Meteor.publish('singlePage', function(id){
	//role based security
	return Pages.find({_id: id});
});

Meteor.publish('slugPage', function(slug){
	//role based security
	return Pages.find({slug: slug});
});

Meteor.publish('aboutPage', function(){
	//role based security
	return Pages.find({slug: 'about-us'});
});

//Staff
Meteor.publish('allStaff', function(){
	//role based security
	return Staff.find();
});

Meteor.publish('singleStaff', function(id){
	//role based security
	return Staff.find({_id: id});
});

//Staff
Meteor.publish('allCallouts', function(){
	//role based security
	return Callouts.find({}, {limit: 3});
});

Meteor.publish('homeCallouts', function(){
	//role based security
	return Callouts.find({}, {limit: 3});
});

Meteor.publish('singleCallout', function(id){
	//role based security
	return Callouts.find({_id: id});
});

//tips
Meteor.publish('allTips', function(){
	//role based security
	return Tips.find({});
});

Meteor.publish('singleTip', function(id){
	//role based security
	return Tips.find({_id: id});
});

Meteor.publish('randomTip', function(id){
	//get random ID by section
	var random = _.sample(Tips.find().fetch());
	// console.log(random)
	return Tips.find({_id: random._id});
});
//banners
Meteor.publish('allBanners', function(){
	//role based security
	return Banners.find({});
});

Meteor.publish('singleBanner', function(id){
	//role based security
	return Banners.find({_id: id});
});

Meteor.publish('randomBanner', function(id){
	//get random ID by section
	var random = _.sample(Banners.find().fetch());
	// console.log(random)
	return Banners.find({_id: random._id});
});

//feedback
Meteor.publish('allFeedback', function(){
	//role based security
	return Feedback.find({});
});

Meteor.publish('singleFeedback', function(id){
	//role based security
	return Feedback.find({_id: id});
});

Meteor.publish('images', function(){
	return Images.find();
});