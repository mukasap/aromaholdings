Template.staffList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('allStaff');
	});
});


Template.staffList.helpers({
	staff: function () {
		return Staff.find();
	}
});

Template.staffList.events({
	'click .delete': function () {
		Staff.remove({_id: this._id});
		return false;
	}
});

//edit
Template.staffEdit.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		self.subscribe('singleStaff', id);
		self.subscribe('images');
	});
});

Template.staffEdit.helpers({
	staff: function () {
		var id = FlowRouter.getParam('id');
		return Staff.findOne({_id: id});
	}
});

Template.staffEdit.events({
  'change [name=image]': function(){
  	var id = FlowRouter.getParam('id');
    var file = $('#image').get(0).files[0];
    if(file){
      fsFile = new FS.File(file);
      Images.insert(fsFile, function(err, result){
        if(!err){
          var image = '/cfs/files/Images/' + result._id;
          Staff.update({_id: id}, {'$set': {image: image, 'meta.image_id': result._id}});
        }
      });
    }
    return false;
  },
  'click .remove-image': function(){
  	var id = FlowRouter.getParam('id');
  	var staff = Staff.findOne({_id: id});
    //remove image 
    Images.remove({_id: staff.meta.image_id});
    //update
    Staff.update({_id: id}, {'$set': {image: null, 'meta.image_id': null}});
    return false;
  }
});

AutoForm.hooks({
insertStaff: {
    onSuccess: function () {
      FlowRouter.go('admin.staff');
      FlashMessages.sendSuccess('Staff Added');
      return false;
    }
  },
  updateStaff: {
    onSuccess: function () {
      FlowRouter.go('admin.staff');
      FlashMessages.sendSuccess('Staff Updated');
      return false;
    }
  },
});