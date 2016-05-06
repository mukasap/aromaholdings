FlowRouter.route('/', {
	name: 'home',
	action: function(){
		BlazeLayout.render('master', {main: 'home'});
	}
});

FlowRouter.route('/staff', {
	name: 'staff',
	action: function(){
		BlazeLayout.render('master', {main: 'staff'});
	}
});
FlowRouter.route('/staff/:id', {
	name: 'staff.show',
	action: function(){
		BlazeLayout.render('master', {main: 'staffShow'});
	}
});

FlowRouter.route('/services/:id', {
	name: 'service.show',
	action: function(){
		BlazeLayout.render('master', {main: 'serviceShow'});
	}
});

FlowRouter.route('/departments/:id', {
	name: 'department.show',
	action: function(){
		BlazeLayout.render('master', {main: 'departmentShow'});
	}
});

FlowRouter.route('/pages/:id', {
	name: 'pages.show',
	action: function(){
		BlazeLayout.render('master', {main: 'pagesShow'});
	}
});

var adminRoutes = FlowRouter.group({
	prefix: '/admin',
	name: 'admin'
});

adminRoutes.route('/', {
	name: 'admin.home',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'adminHome'});
	}
});
adminRoutes.route('/docs', {
	name: 'admin.docs',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'adminDocs'});
	}
});

//Departments
adminRoutes.route('/departments', {
	name: 'admin.departments',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'departmentList'});
	}
});

adminRoutes.route('/departments/add', {
	name: 'admin.departments.add',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'departmentAdd'});
	}
});

adminRoutes.route('/departments/:id/edit', {
	name: 'admin.departments.edit',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'departmentEdit'});
	}
});

//services
adminRoutes.route('/services', {
	name: 'admin.services',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'serviceList'});
	}
});

adminRoutes.route('/services/add', {
	name: 'admin.services.add',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'serviceAdd'});
	}
});

adminRoutes.route('/services/:id/edit', {
	name: 'admin.services.edit',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'serviceEdit'});
	}
});

//carousel
adminRoutes.route('/carousel', {
	name: 'admin.carousel',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'carouselList'});
	}
});

adminRoutes.route('/carousel/add', {
	name: 'admin.carousel.add',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'carouselAdd'});
	}
});

adminRoutes.route('/carousel/:id/edit', {
	name: 'admin.carousel.edit',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'carouselEdit'});
	}
});

//pages
adminRoutes.route('/pages', {
	name: 'admin.pages',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'pageList'});
	}
});

adminRoutes.route('/pages/add', {
	name: 'admin.pages.add',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'pageAdd'});
	}
});

adminRoutes.route('/pages/:id/edit', {
	name: 'admin.pages.edit',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'pageEdit'});
	}
});

//staff
adminRoutes.route('/staff', {
	name: 'admin.staff',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'staffList'});
	}
});

adminRoutes.route('/staff/add', {
	name: 'admin.staff.add',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'staffAdd'});
	}
});

adminRoutes.route('/staff/:id/edit', {
	name: 'admin.staff.edit',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'staffEdit'});
	}
});

//callouts (maketing tools)
adminRoutes.route('/callouts', {
	name: 'admin.callouts',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'calloutList'});
	}
});

adminRoutes.route('/callouts/add', {
	name: 'admin.callouts.add',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'calloutAdd'});
	}
});

adminRoutes.route('/callouts/:id/edit', {
	name: 'admin.callouts.edit',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'calloutEdit'});
	}
});

//feedback (inquiry tools)
adminRoutes.route('/feedback', {
	name: 'admin.feedback',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'feedbackList'});
	}
});

adminRoutes.route('/feedback/add', {
	name: 'admin.feedback.add',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'feedbackAdd'});
	}
});

adminRoutes.route('/feedback/:id/edit', {
	name: 'admin.feedback.edit',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'feedbackEdit'});
	}
});

//tip of the day(marketing tool)
adminRoutes.route('/tip', {
	name: 'admin.tip',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'tipList'});
	}
});

adminRoutes.route('/tip/add', {
	name: 'admin.tip.add',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'tipAdd'});
	}
});

adminRoutes.route('/tip/:id/edit', {
	name: 'admin.tip.edit',
	action: function(){
		BlazeLayout.render('dashboard', {main: 'tipEdit'});
	}
});
//features