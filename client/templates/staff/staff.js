Template.adminStaff.events({
	'click .delete': function () {
		Staff.remove({_id: this._id});
		return false;
	}
});

Template.adminStaffEdit.events({
  'change [name=image]': function(){
  	var id = this._id;
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
  	var id = this._id;
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
      Router.go('admin.staff');
      FlashMessages.sendSuccess('Staff Added');
      return false;
    }
  },
  updateStaff: {
    onSuccess: function () {
      Router.go('admin.staff');
      FlashMessages.sendSuccess('Staff Updated');
      return false;
    }
  },
});