Template.serviceList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('allServices');
	});
});


Template.serviceList.helpers({
	services: function () {
		return Services.find();
	}
});

Template.serviceList.events({
	'click .delete': function () {
		Services.remove({_id: this._id});
		return false;
	}
});

//edit
Template.serviceEdit.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		self.subscribe('singleService', id);
		self.subscribe('images');
	});
});

Template.serviceEdit.helpers({
	service: function () {
		var id = FlowRouter.getParam('id');
		return Services.findOne({_id: id});
	}
});

Template.serviceEdit.events({
  'change [name=image]': function(){
  	var id = FlowRouter.getParam('id');
    var file = $('#image').get(0).files[0];
    if(file){
      fsFile = new FS.File(file);
      Images.insert(fsFile, function(err, result){
        if(!err){
          var image = '/cfs/files/Images/' + result._id;
          Services.update({_id: id}, {'$set': {image: image, 'meta.image_id': result._id}});
        }
      });
    }
    return false;
  },
  'click .remove-image': function(){
  	var id = FlowRouter.getParam('id');
  	var service = Services.findOne({_id: id});
    //remove image 
    Images.remove({_id: service.meta.image_id});
    //update
    Services.update({_id: id}, {'$set': {image: null, 'meta.image_id': null}});
    return false;
  }
});

AutoForm.hooks({
insertService: {
    onSuccess: function () {
      //get new service doc
      var service = Services.findOne({_id: this.docId});
      //set department meta
      Services.update({_id: this.docId}, {'$set': {'meta.department_id': service.department}});
      //push to department  
      Departments.update({_id: service.department}, {'$addToSet': {services :{_id: service._id, name: service.name}}}); 
      FlowRouter.go('admin.services');
      FlashMessages.sendSuccess('Service Added');
      return false;
    }
  },
  updateService: {
    onSuccess: function () {
      //check dpt change
      var service = Services.findOne({_id: this.docId});
      var new_department = service.department;
      var old_department = service.meta.department_id;
      if(new_department != old_department){
        //remove from dpt
        Departments.update({_id: old_department}, {'$pull': {services :{_id: service._id, name: service.name}}}); 
        //set new service  meta.department_id
        Services.update({_id: this.docId}, {'$set': {'meta.department_id': service.department}});
        //push to department  
        Departments.update({_id: service.department}, {'$addToSet': {services :{_id: service._id, name: service.name}}}); 
      }
      FlowRouter.go('admin.services');
      FlashMessages.sendSuccess('Service Updated');
      return false;
    }
  },
});