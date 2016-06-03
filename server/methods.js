Meteor.methods({
	'addDepartment': function(doc){
		Departments.insert(doc);
	},
	'editDepartment': function(doc, docID){
		Departments.update({_id: docID}, doc);
	},
	'addService': function(doc, docID){
		Services.insert(doc);
	},
	'editService': function(doc, docId){
		Services.update({_id: docId}, doc);
	},
	'addCarousel': function(doc){
		Carousel.insert(doc);
	},
	'editCarousel': function(doc, docID){
		Carousel.update({_id: docID}, doc);
	},
	'addStaff': function(doc){
		Staff.insert(doc);
	},
	'editStaff': function(doc, docID){
		Staff.update({_id: docID}, doc);
	},
	'addPage': function(doc){
		Pages.insert(doc);
	},
	'editPage': function(doc, docID){
		Pages.update({_id: docID}, doc);
	},
	'addCallout': function(doc){
		Callouts.insert(doc);
	},
	'editCallout': function(doc, docID){
		Callouts.update({_id: docID}, doc);
	},
	'addFeedback': function(doc){
		Feedback.insert(doc);
	},
	'editFeedback': function(doc, docID){
		Feedback.update({_id: docID}, doc);
	},
	'addTip': function(doc){
		Tips.insert(doc);
	},
	'editTip': function(doc, docID){
		Tips.update({_id: docID}, doc);
	},
	'addBanner': function(doc){
		Banners.insert(doc);
	},
	'editBanner': function(doc, docID){
		Banners.update({_id: docID}, doc);
	},
});
