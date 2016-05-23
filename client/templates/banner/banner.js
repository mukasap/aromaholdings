Template.adminBanners.events({
	'click .delete': function () {
		Banners.remove({_id: this._id});
    //remove images 
    if(this.image){
      Images.remove({_id: this.image._id});
    }   
		return false;
	}
});

Template.adminBannersEdit.events({
  'change [name=image]': function(){
    var id = this._id;
    var file = $('#image').get(0).files[0];
    if(file){
      fsFile = new FS.File(file);
      Images.insert(fsFile, function(err, result){
        if(!err){
          var image = '/cfs/files/Images/' + result._id;
          Banners.update({_id: id}, {'$set': {image: {_id: result._id, path: image}}});
        }
      });
    }
    return false;
  },
  'click .remove-image': function(){
    //remove image 
    Images.remove({_id: this.image._id});
    //update
    Banners.update({_id: this._id}, {'$set': {image: null, 'meta.image_id': null}});
    return false;
  }
});

AutoForm.hooks({
  insertBanner: {
    onSuccess: function () {
      Router.go('admin.banners');
      FlashMessages.sendSuccess('Banner Added');
      return false;
    }
  },
  updateBanner: {
    onSuccess: function () {
      Router.go('admin.banners');
      FlashMessages.sendSuccess('Banner Updated');
      return false;
    }
  },
});