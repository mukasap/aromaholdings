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
			name: 'Air Conditioning',
			desc: '<p>Aroma Holdings provide residential, &  commercial heating, cooling and air purification systems and services all over Uganda and East Africa.</p><p>Aroma Holdings is a fully licensed heating and air conditioning contractor providing services for the residential and commercial customers in Uganda. Our offices are located in Kampala, Uganda. </p><p>Whether you need air conditioning repair or are looking for a complete Heating Ventilation and AC system installation, the expert technicians at Aroma Holdings will provide you with fast, professional service to ensure the highest quality air conditioning and comfort for your home or company.</p>',
			slug: URLify2('Air Conditioning'),
			order: '1'
		},
		{
			name: 'Refrigeration',
			desc: '<p>Aroma Holdings has years of experience meeting and exceeding our customers goals. We provide innovative solutions with highest quality workmanship for all your Refrigeration, Heating Ventilation and AC needs.</p><p>Aroma Holdings has been a key element for businesses and institutions that rely on refrigeration, HVAC and bar/restaurant equipment. Whether you are a bar, restaurant, supermarket, school, prison, warehousing facility or manufacturing plant - we understand that every location is unique, every requirement different. Our trained and experienced team will plan, design and install precisely what you require for your project.</p>',
			slug: URLify2('Refrigeration'),
			order: '2'

		}
		];
		_.each(departments, function(d){
			Departments.insert(d);
		});
		console.log('Default Departments added')
	}

	//services
	if(Services.find().count() < 1){
		var ac = Departments.findOne({name: 'Air Conditioning'});
		var ac_services = [
			{
				name: 'VRV Systems',
				desc: '<div>The variable refrigerant volume systems (VRV/VRF) is basically a large multiple split system. The system can comprise of several indoor fan coil units, matched to one or more outdoor condensing units.</div><div><br></div><div>The VRV / VRF systems can achieve high efficiencies through heat recovery and accurate temperature control. This is achieved with the use of inverters and electronic controls. The systems are split into two basic forms...</div><div><br></div><div>Two pipe heat pump systems</div><div>The two pipe inverter VRV / VRF system is very similar to the multi system explained in the split system section. The system will consist of several indoor units that can be of different types and sizes. The indoor units are served by one or more outdoor condensing units, all using one common refrigerant pipe work system.</div><div><br></div><div>The two pipe system can only run in one mode of operation, heating or cooling. This means that all units can only control when in the same mode. However, the system does allow the individual setting of each fan coil unit within the selected mode.</div><div><br></div><div>The two pipe heat pump VRV / VRF system is suitable for large open plan areas, or areas that only require to be within the same mode at once (heating or cooling). The use of inverters within the outdoor condensing unit allows the system to perform only the required amount of heating or cooling, thus saving energy all round...</div><div><br></div><div>Three pipe heat recovery systems</div><div>The three pipe VRF heat recovery system is similar in configuration to the two pipe system above. Multiple indoor units are connected to one or more outdoor units via one set of refrigeration pipe work. The three pipe system uses three separate pipes rather than two (as the name suggests) between all units connected.</div><div><br></div><div>The three pipe system allows total individual control for each indoor unit. The indoor units can be set in individual modes in any combination. The system also has the ability to recover heat from one area and pass it to another or vice versa. This heat recovery process makes a very efficient system, if designed and installed correctly.</div><div><br></div><div>For example take a large busy office containing a large amount of computer equipment. The office requires cooling to make the area comfortable for the operators within. A three pipe system is installed to carry out the cooling requirements. The system also serves a number of smaller individual offices. The smaller offices require heating. The three pipe system now has the ability to pass the heat absorbed from the main office to the smaller offices as required, and vice versa. Thus the system recovers heat.</div><div><b><br></b></div><div><b>Gas powered VRV / VRF systems</b></div><div><br></div><div>Where the amount of electrical supply is limited and a gas supply is available, gas powered VRF systems can be used. The gas powered VRF system uses a gas powered internal combustion engine in place of the electric compressors in the standard systems.</div><div><br></div><div>The gas powered units have the advantage of reclaiming waste engine heat, when in the heating mode.</div><div><br></div><div>Units are also available that will heat hot water and generate electrical power at the same time. These systems have been installed where it is uneconomical to uprate the building electrical power supplies.</div><div><br></div><div>The systems can also now have the ability to provide additional services such as small power generation and domestic hot water.</div>',
				department: ac._id,
				slug: URLify2('VRV Systems'),

			},
			{
				name: 'Water Chillers',
				desc: '<div>Water chillers are used to provide chilled water to air conditioning and industrial applications. Water chillers are available from small to huge cooling capacities. Fully packaged units are available with integral pumps and hydraulic modules. Heat recovery chillers can be installed to maximise on waste heat from the process of cooling.</div><div><br></div><div>All water chillers operate on the latest ozone friendly refrigerants, with high efficiencies and reduced running costs.</div><div><br></div><div>We design and install a variety of chilled water systems using packaged chillers and heat pumps. Standard units comprising of...</div><div><br></div><div>- Air to water chillers cooling only or heat pump options</div><div>- Water to water chillers</div><div>- Remote condenser water chillers for indoor plant room applications</div><div><br></div><div>We offer installation of chilled water pipework, pumps and all auxiliaries associated with water chiller systems. Extended warranties can be arranged on new installations.</div>',
				department: ac._id,
				slug: URLify2('Water Chillers'),

			},
			{
				name: 'Industrial Applications',
				desc: '<div>Industrial Air Handling Units</div><div><br></div><div>Our regular work involves cooling applications for manufacturing or industrial processes.</div><div><br></div><div>We can design, install, service or repair systems, to help achieve a wide area of cooling requirements. Popular applications are listed below...</div><div><br></div><div>Liquid chillers</div><div>- Spot product coolers and dryers</div><div>- Refrigerated air dryers</div><div>- Control panel and machine coolers</div><div>- Operator comfort cooling applications</div><div><br></div><div>Industrial air handling plant can be designed and installed to cool machine operators, products or machinery where required</div><div><br></div><div>We support a wide range of industrial refrigeration systems, including the build of simple plant enclosures.</div>',
				department: ac._id,
				slug: URLify2('Industrial Applications'),

			},
			{
				name: 'Vehicle Air Conditioning',
				desc: '<div>Motor vehicle air conditioning (MVAC) systems provide passenger comfort cooling for cars, trucks, buses, and rail vehicles. MVAC-like appliances do the same for off-road vehicles, such as agricultural, mining, and construction equipment.&nbsp;</div><div><br></div><div>Car air conditioners not only keep you cool during Summer, but can also remove humidity from the cabin, which can be handy while driving in rain to counteract a foggy windscreen.</div><div><br></div><div>A regular car service will check for obvious faults which may be associated with the air conditioning system, such as drive belt tension, visible signs of refrigerant leaks and loose or faulty compressor or equipment mounting brackets, but it is good practice to have a comprehensive air con service.</div><div><br></div><div>Our professional technicians are certified to diagnose and repair many components in your air conditioning system including the A/C compressor, condenser, blower motor, relays, cooling fans and more! The Free A/C Quick Check is designed to quickly determine whether additional diagnostic recommendations are needed or if a simple refrigerant Charge and Go (with top off) will do the trick.</div><div><br></div><div>Free A/C Quick Check includes:</div><div>- Visual inspection of air conditioner components by a professional technician</div><div>- Outlet temperature analysis designed to determine cooling performance</div><div>- Check system pressure readings</div><div>- Recommendations of correct diagnostic service to troubleshoot area(s) of concern</div><div><br></div>',
				department: ac._id,
				slug: URLify2('Vehicle Air Conditioning'),

			},
		];
		_.each(ac_services, function(s){
			Services.insert(s);
		});

		var rfg = Departments.findOne({name: 'Refrigeration'});
		var rfg_services = [
			{
				name: 'Cold Storage',
				desc: '<div>Aroma Holdings offer a full cold store package to include design and build of the room, through to lighting, refrigeration and control. We offer rooms from small modular build to large lined areas.</div><div><br></div><div>Our standard installations usually include the full package of cold store, refrigeration, lighting and control.</div><div><br></div><div><b>Optional Cold Store Features</b></div><div>- Multiple refrigeration units and back up systems</div><div>- Person trapped alarms &amp; remote general alarms.</div><div>- Data loggers with off site access capabilities</div><div>- Simple SMS or auto dialer systems</div><div>- Strip curtains / choice of manual or auto doors</div><div><br></div><div><b>Blast chillers and freezers</b></div><div>- Modular walk in blast chillers/freezers</div><div>- Full programmable digital controls</div><div>- Choice of popular sizes and build layouts</div>',
				department: rfg._id,
				slug: URLify2('Cold Storage'),

			},
			{
				name: 'Relocation and Decommission',
				desc: '<div>When equipment has reached the end of its useful life, or relocation of equipment is required. We offer a solution for removal or relocation of refrigeration and air conditioning systems.</div><div><br></div><div>Reclaim of refrigerant from within such systems are carried out to meet current regulations.</div><div><br></div><div>All refrigerant transactions are recorded and provided as part of the service.</div><div><br></div><div>Waste is managed to ensure that the equipment is disposed of safely and legally.</div><div><br></div><div>&nbsp;We offer full packages for removal of most equipment related to HVAC products.</div><div><br></div><div>Contact us to arrange a site survey.</div>',
				department: rfg._id,
				slug: URLify2('Relocation and Decommission'),

			},
			{
				name: 'Split Air Conditioners',
				desc: '<div>The SPLIT air conditioning system is made up of two separate parts. The first is installed within the area to be served, and is know as the indoor fan coil unit. The indoor units can be selected from a variety of types to suit the area served.</div><div><br></div><div>The second part is mounted externally and is known as the outdoor condensing unit. This unit rejects or absorbs the heat as the system requires. Both parts of the system are connected via small bore refrigerant pipe work and control cabling.</div><div><br></div><div>Split systems are extremely versatile. The separation between indoor / outdoor units can be up to 70m on the larger systems</div><div><br></div><div>The majority of the systems installed are now inverter controlled. The inverter controls the amount of cooling or heating by varying the speed of the compressor and fans. This allows for quiet running and lower running costs. Systems are now accredited with an energy label (similar to domestic appliance ratings) "A" rated systems are common...</div><div><br></div><div>Most systems installed are now heat pumps, heating and cooling of the internal space is performed by one unit with little extra installation cost. In heating the systems warm the space at a fraction of the cost compared to direct electric heating and even gas systems at current prices...</div><div><br></div><div>Split systems are available in different configurations and styles to suit the areas served...</div><div><br></div><div><b>Wall systems</b></div><div>The simple wall system has the indoor unit installed at high level on a suitable internal wall surface. The wall unit recirculates room air and heats, or cools the air according to the settings from either a hand held remote controller, or a wall mounted controller.</div><div><br></div><div><b>Cassette systems</b></div><div>The cassette unit is recessed into a false ceiling void with only a 30 mm fascia grill exposed within the room area. Room air is drawn through a central grill and discharged in four separate directions. The unit will operate in heating or cooling according to the settings from either a hand held remote controller, or a wall mounted controller.</div><div><br></div><div><b>Ceiling suspended</b></div><div>The ceiling suspended unit is installed up to a corner in the ceiling / wall surface. The room air is drawn through a lower grill section and discharged in a forward fan shape direction. The unit will operate in heating or cooling according to the settings from either a hand held remote controller, or a wall mounted controller.</div><div><b><br></b></div><div><b>Ceiling concealed (Ducted)</b></div><div>The ducted unit is installed within a ceiling void area or bulkhead close or away from the room area served. The ducted unit is mainly a rectangular box with duct work connections for inlet and outlet air. The room is air drawn and discharged through dedicated duct work and grills installed separately. This system allows for great flexibility through design and grill positioning. The unit will operate in heating or cooling according to the settings from either a hand held remote controller, or a wall mounted controller.</div>',
				department: rfg._id,
				slug: URLify2('Split Air Conditioners'),

			},
			{
				name: 'Packaged and Portable Systems',
				desc: '<div>The packaged air conditioning system usually refers to a self contained system that is fully integrated into one package. Packaged systems can serve a variety of areas to control temperature and, or humidity of the area served.</div><div><br></div><div>Packaged systems can be designed and adapted to suit internal or external areas, that are restricted by size and noise issues. Popular systems installed are mainly ducted systems with the duct work distributing the circulated air throughout the areas served.</div><div><b><br></b></div><div><b>Standard units can be equipped with</b></div><div><br></div><div>- Full fresh air or recirculated air systems</div><div>- Heating via gas burners, hot water, heat pumps, direct heating elements or steam</div><div>- Cooling via chilled water coils or direct refrigerant expansion</div><div>- A range of heat exchangers and economisers</div><div>- Humidification via steam or atomised water</div><div>- De humidification via cooling and heating arrangements</div><div>- Air purification via electrostatic or ultra violet treatments</div><div>- A range of standard or specialist filtration systems</div>',
				department: rfg._id,
				slug: URLify2('Packaged and Portable Systems'),

			},
		];
		_.each(rfg_services, function(s){
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

		},
		{
			title: 'Partners',
			body: 'Please Visit our parteners',
			slug: URLify2('Partners'),

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
			title: 'Air Conditioner Leaking',
			tip: 'When refrigerant levels get low, frost can form on the evaporator coils. When the frost melts, it forms water. A technician needs to seal the leak and recharge the refrigerant before it will work again.',

		},
		{
			title: 'Air Conditioner May Be Leaking',
			tip: 'Most air conditioners have a drip pan to collect condensate and remove it from the system. When the line gets clogged, the pan will overflow and dripping water may result. This can damage other components, it needs to be dealt with as quickly as possible.',

		},
		{
			title: 'Change Your Air Filter Regularly',
			tip: 'Your air filter removes many types of harmful contaminants from the air. When your filter is dirty it is unable to remove contaminants from your air, which leads to poor indoor air quality. As a general rule, you should change the filter at least every other month.',

		},
		{
			title: 'Seal Air Leaks',
			tip: 'Most homes have air leaks that allow precious, filtered and cooled air to escape and warm air to enter the home. The result of air leaks is that your AC has to work harder to replace that lost cool air. This added work not only increases the wear and tear on your system, leading to breakdowns and a shorter life span, but also to significantly higher energy bills.',

		},
		{
			title: 'Clean and Insulate Ductwork',
			tip: 'When your ductwork is dirty, it can impede air transfer and make your AC work harder, leading to higher energy bills and more wear and tear. Secondly, ductwork that isnt insulated will be exposed to heat before it reaches its destination.',

		},
		{
			title: 'Clean and Insulate Ductwork',
			tip: 'Ductwork that isnt insulated will be exposed to heat before it reaches its destination, making your AC work harder, leading to higher energy bills.',

		},
		{
			title: 'Misplaced pan',
			tip: 'If your pan is misaligned, then the water will drip onto the floor of the unit. A technician will need to rest or replace the pan before the water causes any damage.',

		},
		{
			title: 'Time To Replace your AC?',
			tip: 'Most air conditioners have an average lifespan of 10-15 years. After 10 years, the rate at which parts and components break or malfunction begins to increase.',

		},
		{
			title: 'Time To Replace your AC?',
			tip: 'Operating your air conditioner with aging parts and components can result in far worse damage and worsen existing wear-and-tear.',

		},
		{
			title: 'Time To Replace your AC?',
			tip: 'As with any mechanical device, you can expect to pay for air conditioning repairs at some point. But if you are calling frequently for repairs, it may be time to consider replacement.',

		},
		{
			title: 'Spike in Utility Bills',
			tip: 'If you see a big jump in your monthly energy costs, and there isn’t an existing problem with your AC or a price increase from the power company, your system may be struggling to supply the amount of cooling you need.',

		},
		{
			title: 'Warmer At Night Is OK',
			tip: 'During the night time hours you dont require the same level of conscious cool. Try turning your AC down (so it is running less) during your sleep hours or an hour or two before bed.',

		},
		{
			title: 'Use Window or Portable Units',
			tip: 'If you arent into cooling your whole home, try using a portable unit to cool just the area youll be working in. They use up to 50% less energy than a larger central air unit would to cool off the same space.',

		},
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
			title: 'Air Conditioning',
			body: 'With a vast experience in Domestic and Commercial air conditioning, Aroma Holdings Uganda prides itself in fully understanding of the market dynamics int hte industry.',
			icon: 'fa-cloud-download',
			slug: 'air-conditioning',

		},
		{
			title: 'Preventative Maintenance',
			body: 'The expert technicians at Aroma Holdings will provide you with fast, professional service to ensure the highest quality air conditioning and comfort for your home, factory or office.',
			icon: 'fa-cogs',
			slug: 'air-conditioning',

		},
		{
			title: 'Refrigeration',
			body: 'Aroma Holdings offer a full cold store package to include design and build of the room, through to lighting, refrigeration and control.',
			icon: 'fa-cubes',
			slug: 'refrigeration',

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
				name: 'VRV Systems',
				type: 'wide',

			},
			{
				name: 'Water Chillers',
				type: 'wide',

			},
			{
				name: 'Industrial Applications',
				type: 'wide',

			},
			{
				name: 'Vehicle Air Conditioning',
				type: 'wide',

			},
			{
				name: 'Cold Storage',
				type: 'wide',

			},
			{
				name: 'Relocation and Decommission',
				type: 'wide',

			},
			{
				name: 'Split Air Conditioners',
				type: 'wide',

			},
			{
				name: 'Packaged and Portable Systems',
				type: 'wide',

			},
			{
				name: 'Airfreight',
				type: 'wide',

			},
			{
				name: 'Seafreight',
				type: 'wide',

			},
			{
				name: 'Transits',
				type: 'wide',

			},
			{
				name: 'Motor Vehicle Clearance',
				type: 'wide',

			},
		];
		_.each(banners, function(c){
			Banners.insert(c);
		});
		console.log('Default Banners added')
	}
});
