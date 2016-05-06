Template.home.onRendered(function(){
	
});

Template.home.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('allStaff');
		self.subscribe('homeCarousel');
		self.subscribe('allCallouts');
	});
});

Template.home.helpers({
	staff: function () {
		return Staff.find();
	},
	carousel: function(){
		return Carousel.findOne({name: 'home'});
	},
	callouts: function(){
		return Callouts.find();
	}
});

Template.staff.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('allStaff');
	});
});

Template.staff.helpers({
	staff: function () {
		return Staff.find();
	}
});

Template.staffShow.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('singleStaff');
	});
});

Template.staffShow.helpers({
	staff: function () {
		return Staff.findOne({_id: FlowRouter.getParam('id')});
	}
});

Template.serviceShow.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('singleService');
	});
});

Template.serviceShow.helpers({
	services: function () {
		return Services.findOne({_id: FlowRouter.getParam('id')});
	}
});

Template.departmentShow.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('singleDepartment');
	});
});

Template.departmentShow.helpers({
	departments: function () {
		return Departments.findOne({_id: FlowRouter.getParam('id')});
	}
});

Template.pageShow.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('singlePage');
	});
});

Template.pageShow.helpers({
	departments: function () {
		return Pages.findOne({_id: FlowRouter.getParam('id')});
	}
});