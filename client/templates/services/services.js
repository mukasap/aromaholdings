Template.adminServices.events({
	'click .delete': function () {
		Services.remove({_id: this._id});
    //remove image 
    Images.remove({_id: service.meta.image_id});
		return false;
	}
});

Template.adminServicesEdit.events({
  'change [name=image]': function(){
    var id = this._id;
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
  	var id = this._id;
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