Template.adminDepartments.events({
	'click .delete': function () {
		Departments.remove({_id: this._id});
     //remove images
    if(this.image){
      Images.remove({_id: this.image._id});
    }
		return false;
	}
});

Template.adminDepartmentsEdit.events({
  'change [name=image]': function(){
    var id = this._id;
    var file = $('#image').get(0).files[0];
    if(file){
      fsFile = new FS.File(file);
      Images.insert(fsFile, function(err, result){
        if(!err){
          var image = '/cfs/files/Images/' + result._id;
          Departments.update({_id: id}, {'$set': {image: {_id: result._id, path: image}}});
        }
      });
    }
    return false;
  },
  'click .remove-image': function(){
    // //remove image
    Images.remove({_id: this.image._id});
    // //update
    Departments.update({_id: this._id}, {'$set': {image: null}});
    return false;
  }
});

AutoForm.hooks({
insertDepartment: {
    onSuccess: function () {
      this.event.preventDefault();
      Router.go('admin.departments');
      FlashMessages.sendSuccess('Department Added');
      return false;
    }
  },
  updateDepartment: {
    onSuccess: function () {
      this.event.preventDefault();
      Router.go('admin.departments');
      FlashMessages.sendSuccess('Department Updated');
    }
  },
});
