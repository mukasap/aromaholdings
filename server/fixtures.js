Meteor.startup(function () {
	//departments
	if(Departments.find().count() < 1){
		var departments = [
		{name: 'Air Conditioning', desc: 'Sample page about us edit me fresh install', slug: 'air-conditioning'},
		{name: 'Refrigeration', desc: 'Sample page support edit me fresh install', slug: 'refrigeration'},
		{name: 'Customs', desc: 'Sample page support edit me fresh install', slug: 'customs'},
		{name: 'Taxation', desc: 'Sample page support edit me fresh install', slug: 'taxtion'},
		];
		_.each(departments, function(d){
			Departments.insert(d);
		});
		console.log('Default Departments added')
	}

	//services
	if(Services.find().count() < 1){
		console.log('Services added')
	}

	//pages
	if(Pages.find().count() < 1){
		var pages = [
		{title: 'About Us', body: 'Sample page about us edit me fresh install', slug: 'about-us'},
		{title: 'Support', body: 'Sample page support edit me fresh install', slug: 'support'}
		];
		_.each(pages, function(p){
			Pages.insert(p);
		});
		console.log('Default Pages added')
	}

	//carousel
	if(Carousel.find().count() < 1){
		Carousel.insert({name: 'home', heading: 'Welcome to Aroma Holdings'});
		console.log('Defalut Carousel added')
	}

	//tips
	if(Tips.find().count() < 1){
		console.log('Default Tips added')
	}
});