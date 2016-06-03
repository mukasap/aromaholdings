Meteor.startup(function () {
	//users
	if(Meteor.users.find().count() < 1){
		var users = [
			{
				name: 'developer',
				email: 'dev.aromaholdings@gmail.com',
				roles: ['admin']
			},
			{
				name: 'Jim',
				email: 'jimlicia@gmail.com',
				roles: ['admin']
			}
		];

		_.each(users, function(user){
			var id;
			 id = Accounts.createUser({
			 	password: 'Apple123_',
			 	email: user.email,
			 	profile: {
			 		name: user.name
			 	}
			 });

			 if(user.roles.length > 0){
			 	Roles.addUsersToRoles(id, user.roles);
			 }
		});
		console.log('Default users created')
	}

	//departments
	if(Departments.find().count() < 1){
		var departments = [
		{
			name: 'Customs',
			desc: '<p>Aroma Holdings handles every aspect of gateway clearance and delivery for you, communicating with customs officials and offering you the most appropriate distribution options. We compile accurate declarations and we pay duties and taxes on your behalf. We offer a range of added value services to assist with processing and distribution of your goods.</p><strong>From Aroma Holdings you can expect: </strong><ul><li>Access to specialists and agents 24 hours a day, 7 days a week</li><li>Guidance, so your customs submissions can be promptly processed<li><li>A single contact person for the entire process</li><li>Efficient international transport</li></ul>',
			slug: URLify2('Customs'),
			order: '1',
			color: 'green',

		},
		{
			name: 'Taxation',
			desc: '<p>Record keeping and filing tax returns is often quite taxing, stressful and time consuming. While you concentrate on doing your business right, our business is to handle your accounts and maximise your tax returns. We deal with all your complex tax issues, record keeping and investments etc and give you the right and timely advise to safeguard your interest. At Aroma Holdings, we understand your needs. We are friendly and approachable. Our services are cost-effective. We take personal interest in each client. We offer reasonable charges and confidential and friendly service and Super Fast Returns. </p><p>We offer a free, no-obligation 20-minute consultation. During this consultation you will be be fully informed of our services before taking up our services. This allows you see our capabilities in dealing with your tax and investment issues to make them as simple and stress-free as possible. Should your needs are more complex and special we can develop appropriate individualised strategies and plans for specialised service.</p>',
			slug: URLify2('Taxation'),
			order: '2',
			color: 'purple',

		},
		];
		_.each(departments, function(d){
			Departments.insert(d);
		});
		console.log('Default Departments added')
	}

	//services
	if(Services.find().count() < 1){
		var cst = Departments.findOne({name: 'Customs'});
		var cst_services = [
			{
				name: 'Airfreight',
				desc: '<div>Aroma Holdings Ltd offers Air Cargo, Air Freight &amp; Air Tracking at unbeatable rates. We are able to offer expedited Air Freight services to &amp; from destinations around the world, to Uganda. Our office is strategically placed in Kampala for air freight shipments from Entebbe airport to suit our customers in business requiring timely &amp; critical delivery.</div><div><br></div><div>With a wide range of air freight services Aroma meets your requirements with professionalism &amp; reliability. We offer consolidations when required.</div><div><br></div><div>Aroma works closely with you to find the most suitable freight for your air shipments then select the most appropriate carrier for your air freight that gives you a head start over other air freight companies and provides real time updates with our air tracking system to you our customer.</div><div><br></div><div>Efficient inward &amp; outward consolidation service to importers &amp; exporters is provided. We ensure there is no mid-point break bulk so that chances of freight mishandling are avoided. Extra caution is taken when handling Fragile &amp; Sensitive freights.</div>',
				department: cst._id,
				slug: URLify2('Airfreight'),

			},
			{
				name: 'Seafreight',
				desc: '<div>Aroma offers innovative sea freight clearing &amp; forwarding solutions to cater to the diverse needs of our clients. Constant attention to expediting your sea freight clearing&amp; forwarding is part of our routine at our offices. Aroma provides advice, technical &amp; supervision in order to guarantee safe delivery of freight at the entire satisfaction of our clients.</div><div><br></div><div>Aroma can meet all your sea freight logistics needs around the world, whether your shipping smallest to the large consignments from any part of the world, we ensure that it reaches the desired destination on time.</div><div><br></div><div>In regards to this, without any restrictions in the weight &amp; size of cargo, we provide all of ocean freight forwarding &amp; clearing services such as managing shipping documents, door to door delivery &amp; pick-up. Aroma operates in a very flexible way with alternative ways of delivering the goods.</div><div><br></div><div>Being an efficient international ocean freight forwarder &amp; clearing services, we provide comprehensive services to all seaports &amp; locations. We have an excellent network with several shipping lines throughout the world.</div><div><br></div><div>Our customized services include:</div><div><br></div><div>- Full –Container- Load (F.C.L) consolidation.</div><div>- Less –Container- Load (L.C.L) consolidation.</div><div>- Worldwide consolidation services.</div><div>- Multi modal transportation sea/air/land.</div><div>- Cargo tracking systems.</div><div>- Warehousing.&nbsp;</div><div>- Freight insurance &amp; packing options.</div><div>- Refrigerated services for perishables.</div><div>- Automated documentation.</div><div>- Dry &amp; liquid bulk.</div><div>- Domestic &amp; international freight.</div><div>- Door to door services.</div>',
				department: cst._id,
				slug: URLify2('Seafreight'),

			},
			{
				name: 'Transits',
				desc: '<div>Aroma Holdings Uganda is a full service transportation provider established and specialized in the safe transport of legal and over dimensional cargo using standard or specialized equipment. We have the advanced technology to expedite your freight whether you require a truckload or are shipping a major international project.</div><div><br></div><div>Aroma Holdings Uganda has developed strategic customer alliances by customizing service to specific needs. Our Sales Team has the knowledge and experience required to safely transport diverse commodities worldwide.&nbsp;</div><div><br></div><div>Aroma Holdings Uganda employs experienced, safety conscious Department of Transportation qualified drivers. We offer a personalized work environment and can meet your transportation needs anywhere in East Africa.</div>',
				department: cst._id,
				slug: URLify2('Transits'),

			},
			{
				name: 'Motor Vehicle Clearance',
				desc: '<div>Vehicle Importing, Clearance Registration of Cars should be a carefully carried out procedure, with assistance and in consultations with experts and customs clearing agents. Aroma Holdings Uganda is the leader in clearing and forwarding vehicles for the Ugandan market or transits for East Africa. Specializing in Shipping, Warehousing, Freight Clearing and Forwarding Aroma Holdings also caters for larger market of Vehicle Imports, Clearance and Registration of motor vehicles.</div><div><br></div><div>With a vast experience in vehicles shipping &nbsp;on sea, air, shipping and car transportation sectors, Aroma Holdings Uganda works closely with its valued clients and prides itself in fully understanding of the market dynamics and freight logistics car import industry demands.</div><div><br></div><div>We will help you go the entire process of considering different vehicles, sourcing, identifying the car, purchasing and transporting your car to port of loading for Shipping vehicle sourcing, vehicle importation, meeting Uganda regulations, vehicle shipping to Kenya, vehicle inspections, Uganda customs duties payments, Uganda vehicle registration, vehicle clearing and vehicle transportation modes and finally delivery of your vehicle at your door step. This will gives you confidence and peace of mind and saves your time and money.</div><div><br></div><div>In consultation with Aroma Holdings Uganda you will get and benefit from the following services and Advice on Cars Importation</div><div><br></div><div>- Car Sourcing</div><div>- Identifying A Car</div><div>- Optimizing Your Requirements in a car and Budget</div><div>- Cars Importations Procedures</div><div>- Consultation on Cars You Can Import</div><div>- Uganda Customs Regulations on Motor Vehicle Importation</div><div>- Cars Duty Calculation</div><div>- Duty and Taxes Payable</div><div>- Exemptions Qualification of Motor Vehicles.</div><div>- Car Registration</div><div>- Car Clearance</div><div>- Post Clearance maintenance services</div>',
				department: cst._id,
				slug: URLify2('Motor Vehicle Clearance'),

			},
		];
		_.each(cst_services, function(s){
			Services.insert(s);
		});
		console.log('Services added')

	}

	//pages
	if(Pages.find().count() < 1){
		var pages = [
		{
			title: 'About Us',
			body: '<div>With continuously changing Global Market, Customs, Taxation and Air Conditioning needs are inevitable. There is need for well rounded professionals to offer consultancy, advisory and technical support in these growing sectors.</div><div><br></div><div>We in Aroma understand the difference between price and value. Value is inbuilt, has character, regenerates, overshadows price and that it is a process and not an event.&nbsp;</div><div><br></div><div>Aroma Holdings Limited therefore comes in to offer the following valuable services;</div><div>- Customs Clearance and Cargo Tracking</div><div>- Taxation</div><div>- Refrigeration</div><div>- Air Conditioning.</div><div>&nbsp;</div><div>Our company goes beyond limit to provide required information to clients that leaves them satisfied and ready to boldly take their transaction decisions. The wealth of experience we have both locally and internationally gives us confidence to take challenges on behalf of our esteemed clients.</div><div><b><br></b></div><div><b>Our Vision</b></div><div>To be the prefered Tax, Customs, AC and Refrigeration Company in the East African Community respected by Provision of Creative and Innovative Products tailored to Achieve Customer Satisfaction.</div><div><br></div><div><b>Our Mission</b></div><div>To Constantly exceed Customer expectations by providing efficient customs, freight forwarding, Tax, AC and Refrigeration solutions.&nbsp;</div><div><br></div><div>To contribute to the satisfation of our stakeholders</div><div><br></div><div><b>Aromas Promise To You</b></div><div>To serve you with courtesy and confidence</div><div><br></div>',
			slug: URLify2('About Us'),

		},
		{
			title: 'Support',
			body: '<p>Our company goes beyond limit to provide required information to clients that leaves them satisfied and ready to boldly critical buisness decisions. The wealth of experience we have both locally and internationally gives us confidence to take challenges on behalf of our esteemed clients.</p><p>Aroma’s professionals are unified by a collaborative culture that fosters integrity, outstanding values to clients and public. The professionals are dedicated to strengthening corporate responsibility, building public trust and making impact in the community;</p><p>All services are personalized and are provided by individual experts in the company who are trained to handle specialized duties to the benefit of</p><p><b>Feel Free to contact our support staff</b></p><p>Aroma Holdings<br>P.O.Box 4040 Kampala<br>Tel: 039345678<br>Email <a href="mailto:jimlicia@gmail.com">jimlicia@gmail.com</a><br><a href="mailto:jimlicia@gmail.com">Info@aromaholdings.com</a>',
			slug: URLify2('Support'),

		},
		{
			title: 'Address',
			body: '<p>Aroma Holdings<br>P.O.Box 4040 Kampala<br>Tel: 039345678<br>Email <a href="mailto:jimlicia@gmail.com">jimlicia@gmail.com</a><br><a href="mailto:jimlicia@gmail.com">Info@aromaholdings.com</a>',
			slug: URLify2('Address'),

		}
		];
		_.each(pages, function(p){
			Pages.insert(p);
		});
		console.log('Default Pages added')
	}

	//carousel
	if(Carousel.find().count() < 1){
		Carousel.insert({name: 'home', heading: 'Welcome to Aroma Holdings', });
		console.log('Defalut Carousel added')
	}

	//tips
	if(Tips.find().count() < 1){
		var tips = [
		{
			title: 'Management Aroma Holdings',
			tip: 'Our company goes beyond limit to provide required information to clients that leaves them satisfied and ready to boldly take their import & export decisions. The wealth of experience we have both locally and internationally gives us confidence to take challenges on behalf of our esteemed clients.',

		}
		];
		_.each(tips, function(c){
			Tips.insert(c);
		});
		console.log('Default Tips added')
	}

	//callouts
	if(Callouts.find().count() < 1){
		var callouts = [
		{
			title: 'Customs',
			body: 'Our clients include global mail and distribution services, freight forwarders, wholesalers, retailers, courier companies and e-commerce businesses, moving shipments by air, sea or road.',
			icon: 'fa-ship',
			slug: 'customs',

		},
		{
			title: 'Vehicle Clearance',
			body: ' Aroma Holdings Uganda is the leader in clearing and forwarding vehicles for the Ugandan market or transits for East Africa. Specializing in Shipping, Warehousing, Freight Clearing and Forwarding.',
			icon: 'fa-automobile',
			slug: 'vehicle-clearance',

		},
		{
			title: 'Taxation',
			body: 'We deal with all your complex tax issues, record keeping and investments etc and give you the right and timely advise to safeguard your interest.',
			icon: 'fa-money',
			slug: 'taxation',

		}
		];
		_.each(callouts, function(c){
			Callouts.insert(c);
		});
		console.log('Default callouts added')
	}
	//callouts
	if(Banners.find().count() < 1){
		var banners = [
			{
			    "name" : "Car Clearance",
			    "type" : "wide",
			    "link" : "motor-vehicle-clearance"
			},
			{
			  "name" : "Cagro Handing",
			  "type" : "wide",
			  "link" : "transits"
			},
			{
			  "name" : "Our Mission",
			  "type" : "wide",
			  "link" : "airfreight"
			},
			{
			  "name" : "Airfreight medium",
			  "type" : "medium",
			  "link" : "airfreight"
			},
			{
			  "name" : "Shipping",
			  "link" : "seafreight",
			  "type" : "medium"
			},
			{
			  "name" : "Cargo medium",
			  "link" : "transits",
			  "type" : "medium"
			}
		];
		_.each(banners, function(c){
			Banners.insert(c);
		});
		console.log('Default Banners added')
	}
});
