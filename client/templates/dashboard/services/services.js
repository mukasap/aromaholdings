Template.adminServices.events({
	'click .delete': function () {
		Services.remove({_id: this._id});
    //remove images
    if(this.image){
      Images.remove({_id: this.image._id});
    }
		if(this.thumbnail){
			Images.remove({_id: this.thumbnail._id});
		}
		return false;
	}
});

Template.adminServicesEdit.events({
	'change [name=thumbnail]': function(){
    var id = this._id;
    var file = $('#thumbnail').get(0).files[0];
    if(file){
      fsFile = new FS.File(file);
      Images.insert(fsFile, function(err, result){
        if(!err){
          var image = '/cfs/files/Images/' + result._id;
          Services.update({_id: id}, {'$set': {thumbnail: {_id: result._id, path: image}}});
        }
      });
    }
    return false;
  },
  'click .remove-thumbnail': function(){
    // //remove image
    Images.remove({_id: this.thumbnail._id});
    // //update
    Services.update({_id: this._id}, {'$set': {thumbnail: null}});
    return false;
  },
  'change [name=image]': function(){
    var id = this._id;
    var file = $('#image').get(0).files[0];
    if(file){
      fsFile = new FS.File(file);
      Images.insert(fsFile, function(err, result){
        if(!err){
          var image = '/cfs/files/Images/' + result._id;
          Services.update({_id: id}, {'$set': {image: {_id: result._id, path: image}}});
        }
      });
    }
    return false;
  },
  'click .remove-image': function(){
  	//remove image
    Images.remove({_id: this.image._id});
    //update
    Services.update({_id: this._id}, {'$set': {image: null}});
    return false;
  }
});

AutoForm.hooks({
insertService: {
    onSuccess: function () {
      this.event.preventDefault();
      Router.go('admin.services');
      FlashMessages.sendSuccess('Service Added');
    }
  },
  updateService: {
    onSuccess: function () {
      this.event.preventDefault();
      Router.go('admin.services');
      FlashMessages.sendSuccess('Service Updated');
    }
  },
});
