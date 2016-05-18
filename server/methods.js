Meteor.methods({
	'addDepartment': function(doc){
		Departments.insert(doc);
	},
	'editDepartment': function(doc, docID){
		Departments.update({_id: docID}, doc);
	},
	'addService': function(doc, docID){
		Services.insert(doc, function(err, docId){
			//add meta data
			Services.update({_id: docId}, {'$set': {'meta.department_id': doc.department}});
			//push to department  
      		Departments.update({_id: doc.department}, {'$addToSet': {services :{_id: docId, name: doc.name}}}); 
		});
	},
	'editService': function(doc, docId){
		Services.update({_id: docId}, doc);
		var service = Services.findOne({_id: docId});
		var new_department = doc.department;
      	var old_department = service.meta.department_id;
	    if(new_department != old_department){
	        //remove from old dpt
	        Departments.update({_id: old_department}, {'$pull': {services :{_id: docId, name: service.name}}}); 
	        //set new service  meta.department_id
	        Services.update({_id: this.docId}, {'$set': {'meta.department_id': service.department}});
	        //push to new department  
	        Departments.update({_id: service.department}, {'$addToSet': {services :{_id: docId, name: service.name}}}); 
	    }
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
