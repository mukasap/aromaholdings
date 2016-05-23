Template.adminPages.events({
	'click .delete': function () {
		Pages.remove({_id: this._id});
    //remove images 
    if(this.image){
      Images.remove({_id: this.image._id});
    }    
		return false;
	}
});

Template.adminPagesEdit.events({
  'change [name=image]': function(){
  	var id = this._id;
    var file = $('#image').get(0).files[0];
    if(file){
      fsFile = new FS.File(file);
      Images.insert(fsFile, function(err, result){
        if(!err){
          var image = '/cfs/files/Images/' + result._id;
          Pages.update({_id: id}, {'$set': {image: {_id: result._id, path: image}}});
        }
      });
    }
    return false;
  },
  'click .remove-image': function(){
  	//remove image 
    Images.remove({_id: this.image._id});
    //update
    Pages.update({_id: this._id}, {'$set': {image: null}});
    return false;
  }
});

AutoForm.hooks({
insertPage: {
    onSuccess: function () {
      Router.go('admin.pages');
      FlashMessages.sendSuccess('Page Added');
      return false;
    }
  },
  updatePage: {
    onSuccess: function () {
      Router.go('admin.pages');
      FlashMessages.sendSuccess('Page Updated');
      return false;
    }
  },
});