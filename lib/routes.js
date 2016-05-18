Router.configure({
	layoutTemplate: 'master'
});

Router.route('/', {
	name: 'home',
	subscriptions: function(){
		return [
			Meteor.subscribe('homeCarousel'),
			Meteor.subscribe('randomTip'),
			Meteor.subscribe('allCallouts'),
			Meteor.subscribe('allDepartments'),
			Meteor.subscribe('aboutPage')
		];
	},
	data: function(){
		return {
			carousel: Carousel.find({name: 'home'}),
			tip: Tips.find({}),
			callouts: Callouts.find({}),
			departments: Departments.find({}, {limit: 3}),
			about: Pages.find({})
		};
	}
});

Router.route('/services/:_id', {
	name: 'service.show',
	subscriptions: function(){
		Meteor.subscribe('singleService', this.params._id);
	},
	data: function(){
		return Services.findOne({_id: this.params._id});
	}
});

Router.route('/department/:_id', {
	name: 'department.show',
	subscriptions: function(){
		Meteor.subscribe('singleDepartment', this.params._id);
	},
	data: function(){
		return Departments.findOne({_id: this.params._id});
	}
});

Router.route('/pages/:slug', {
	name: 'pages.show',
	subscriptions: function(){
		Meteor.subscribe('slugPage', this.params.slug);
	},
	data: function(){
		return Pages.findOne({slug: this.params.slug});
	}
});

Router.route('/admin', {
	name: 'admin.home',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return [
			Meteor.subscribe('allDepartments'),
			Meteor.subscribe('allServices'),
			Meteor.subscribe('allStaff'),
			Meteor.subscribe('allPages'),
			Meteor.subscribe('allCarousels'),
			Meteor.subscribe('allCallouts'),
			Meteor.subscribe('allTips'),
			Meteor.subscribe('allFeedback')
		];
	},
	data: function(){
		return {
			departmentCount: Departments.find().count(),
			serviceCount: Services.find().count(),
			staffCount: Staff.find().count(),
			pageCount: Pages.find().count(),
			carouselCount: Carousel.find().count(),
			calloutCount: Callouts.find().count(),
			tipCount: Tips.find().count(),
			feedbackCount: Feedback.find().count()
		};
	}	
});

Router.route('/docs', {
	name: 'admin.docs',
	layoutTemplate: 'dashboard'
});

//Departments
Router.route('/admin/departments', {
	name: 'admin.departments',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('allDepartments');
	}, 
	data: function(){
		return {
			departments: Departments.find()
		};
	}	
});

Router.route('/admin/departments/add', {
	name: 'admin.departments.add',
	layoutTemplate: 'dashboard'	
});

Router.route('/admin/departments/:_id/edit', {
	name: 'admin.departments.edit',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('singleDepartment', this.params._id);
	}, 
	data: function(){
		return Departments.findOne({_id: this.params._id});
	}	
});

// //services
Router.route('/admin/services', {
	name: 'admin.services',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('allServices');
	},
	data: function(){
		return {
			services: Services.find({})
		};
	}
});

Router.route('/admin/services/add', {
	name: 'admin.services.add',
	layoutTemplate: 'dashboard',
	
});

Router.route('/admin/services/:_id/edit', {
	name: 'admin.services.edit',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('singleService', this.params._id);
	},
	data: function(){
		return Services.findOne({_id: this.params._id});
	}
});

// //carousel
Router.route('/admin/carousel', {
	name: 'admin.carousel',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('allCarousels');
	},
	data: function(){
		return {
			carousels: Carousel.find({})
		};
	}
});

Router.route('/admin/carousel/add', {
	name: 'admin.carousel.add',
	layoutTemplate: 'dashboard',
	
});

Router.route('/admin/carousel/:_id/edit', {
	name: 'admin.carousel.edit',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('singleCarousel', this.params._id);
	},
	data: function(){
		return Carousel.findOne({_id: this.params._id});
	}
});

// //pages
Router.route('/admin/pages', {
	name: 'admin.pages',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('allPages');
	},
	data: function(){
		return {
			pages: Pages.find({})
		};
	}
});

Router.route('/admin/pages/add', {
	name: 'admin.pages.add',
	layoutTemplate: 'dashboard',
	
});

Router.route('/admin/pages/:_id/edit', {
	name: 'admin.pages.edit',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('singlePage', this.params._id);
	},
	data: function(){
		return Pages.findOne({_id: this.params._id});
	}
});

// //staff
Router.route('/admin/staff', {
	name: 'admin.staff',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('allStaff');
	},
	data: function(){
		return {
			staff: Staff.find({})
		};
	}
});

Router.route('/admin/staff/add', {
	name: 'admin.staff.add',
	layoutTemplate: 'dashboard',
	
});

Router.route('/admin/staff/:_id/edit', {
	name: 'admin.staff.edit',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('singleStaff', this.params._id);
	},
	data: function(){
		return Staff.findOne({_id: this.params._id});
	}
});

// //callouts (maketing tools)
Router.route('/admin/callouts', {
	name: 'admin.callouts',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('allCallouts');
	},
	data: function(){
		return {
			callouts: Callouts.find({})
		};
	}
});

Router.route('/admin/callouts/add', {
	name: 'admin.callouts.add',
	layoutTemplate: 'dashboard',
});

Router.route('/admin/callouts/:_id/edit', {
	name: 'admin.callouts.edit',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('singleCallout', this.params._id);
	},
	data: function(){
		return Callouts.findOne({_id: this.params._id});
	}
});

// //feedback (inquiry tools)
Router.route('/admin/feedback', {
	name: 'admin.feedback',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('allFeedback');
	},
	data: function(){
		return {
			feedback: Feedback.find({})
		};
	}
});

Router.route('/admin/feedback/add', {
	name: 'admin.feedback.add',
	layoutTemplate: 'dashboard',
	
});

Router.route('/admin/feedback/:_id/edit', {
	name: 'admin.feedback.edit',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('singleFeedback', this.params._id);
	},
	data: function(){
		return Feedback.findOne({_id: this.params._id});
	}
});

// //tip of the day(marketing tool)
Router.route('/admin/tip', {
	name: 'admin.tips',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('allTips');
	},
	data: function(){
		return {
			tips: Tips.find({})
		};
	}
});

Router.route('/admin/tip/add', {
	name: 'admin.tips.add',
	layoutTemplate: 'dashboard',
	
});

Router.route('/admin/tip/:_id/edit', {
	name: 'admin.tips.edit',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('singleTip', this.params._id);
	},
	data: function(){
		return Tips.findOne({_id: this.params._id});
	}
});
// Banners (marketing tool)
Router.route('/admin/banner', {
	name: 'admin.banners',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('allBanners');
	},
	data: function(){
		return {
			banners: Banners.find({})
		};
	}
});

Router.route('/admin/banner/add', {
	name: 'admin.banners.add',
	layoutTemplate: 'dashboard',
	
});

Router.route('/admin/banner/:_id/edit', {
	name: 'admin.banners.edit',
	layoutTemplate: 'dashboard',
	subscriptions: function(){
		return Meteor.subscribe('singleBanner', this.params._id);
	},
	data: function(){
		return Banners.findOne({_id: this.params._id});
	}
});
