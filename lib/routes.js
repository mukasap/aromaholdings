// FlowRouter.route('/', {
// 	name: 'home',
// 	action: function(){
// 		BlazeLayout.render('master', {main: 'home'});
// 	}
// });

// FlowRouter.route('/staff', {
// 	name: 'staff',
// 	action: function(){
// 		BlazeLayout.render('master', {main: 'staff'});
// 	}
// });
// FlowRouter.route('/staff/:id', {
// 	name: 'staff.show',
// 	action: function(){
// 		BlazeLayout.render('master', {main: 'staffShow'});
// 	}
// });

// FlowRouter.route('/services/:id', {
// 	name: 'service.show',
// 	action: function(){
// 		BlazeLayout.render('master', {main: 'serviceShow'});
// 	}
// });

// FlowRouter.route('/departments/:id', {
// 	name: 'department.show',
// 	action: function(){
// 		BlazeLayout.render('master', {main: 'departmentShow'});
// 	}
// });

// FlowRouter.route('/pages/:id', {
// 	name: 'pages.show',
// 	action: function(){
// 		BlazeLayout.render('master', {main: 'pagesShow'});
// 	}
// });

// var adminRoutes = FlowRouter.group({
// 	prefix: '/admin',
// 	name: 'admin'
// });

Router.configure({
	layoutTemplate: 'master'
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
		console.log('department edit', Departments.findOne({_id: this.params._id}));
		return Departments.findOne({_id: this.params._id});
		
	}

	
});

// //services
// adminRoutes.route('/services', {
// 	name: 'admin.services',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'serviceList'});
// 	}
// });

// adminRoutes.route('/services/add', {
// 	name: 'admin.services.add',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'serviceAdd'});
// 	}
// });

// adminRoutes.route('/services/:id/edit', {
// 	name: 'admin.services.edit',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'serviceEdit'});
// 	}
// });

// //carousel
// adminRoutes.route('/carousel', {
// 	name: 'admin.carousel',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'carouselList'});
// 	}
// });

// adminRoutes.route('/carousel/add', {
// 	name: 'admin.carousel.add',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'carouselAdd'});
// 	}
// });

// adminRoutes.route('/carousel/:id/edit', {
// 	name: 'admin.carousel.edit',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'carouselEdit'});
// 	}
// });

// //pages
// adminRoutes.route('/pages', {
// 	name: 'admin.pages',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'pageList'});
// 	}
// });

// adminRoutes.route('/pages/add', {
// 	name: 'admin.pages.add',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'pageAdd'});
// 	}
// });

// adminRoutes.route('/pages/:id/edit', {
// 	name: 'admin.pages.edit',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'pageEdit'});
// 	}
// });

// //staff
// adminRoutes.route('/staff', {
// 	name: 'admin.staff',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'staffList'});
// 	}
// });

// adminRoutes.route('/staff/add', {
// 	name: 'admin.staff.add',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'staffAdd'});
// 	}
// });

// adminRoutes.route('/staff/:id/edit', {
// 	name: 'admin.staff.edit',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'staffEdit'});
// 	}
// });

// //callouts (maketing tools)
// adminRoutes.route('/callouts', {
// 	name: 'admin.callouts',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'calloutList'});
// 	}
// });

// adminRoutes.route('/callouts/add', {
// 	name: 'admin.callouts.add',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'calloutAdd'});
// 	}
// });

// adminRoutes.route('/callouts/:id/edit', {
// 	name: 'admin.callouts.edit',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'calloutEdit'});
// 	}
// });

// //feedback (inquiry tools)
// adminRoutes.route('/feedback', {
// 	name: 'admin.feedback',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'feedbackList'});
// 	}
// });

// adminRoutes.route('/feedback/add', {
// 	name: 'admin.feedback.add',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'feedbackAdd'});
// 	}
// });

// adminRoutes.route('/feedback/:id/edit', {
// 	name: 'admin.feedback.edit',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'feedbackEdit'});
// 	}
// });

// //tip of the day(marketing tool)
// adminRoutes.route('/tip', {
// 	name: 'admin.tip',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'tipList'});
// 	}
// });

// adminRoutes.route('/tip/add', {
// 	name: 'admin.tip.add',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'tipAdd'});
// 	}
// });

// adminRoutes.route('/tip/:id/edit', {
// 	name: 'admin.tip.edit',
// 	action: function(){
// 		BlazeLayout.render('dashboard', {main: 'tipEdit'});
// 	}
// });
// //features