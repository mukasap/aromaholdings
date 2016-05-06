Template.pageList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('allPages');
	});
});


Template.pageList.helpers({
	pages: function () {
		return Pages.find();
	}
});

Template.pageList.events({
	'click .delete': function () {
		Pages.remove({_id: this._id});
		return false;
	}
});

//edit
Template.pageEdit.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
    self.subscribe('images');
		self.subscribe('singlePage', id);

	});
});

Template.pageEdit.helpers({
	page: function () {
		var id = FlowRouter.getParam('id');
		return Pages.findOne({_id: id});
	}
});

Template.pageEdit.events({
  'change [name=image]': function(){
  	var id = FlowRouter.getParam('id');
    var file = $('#image').get(0).files[0];
    if(file){
      fsFile = new FS.File(file);
      Images.insert(fsFile, function(err, result){
        if(!err){
          var image = '/cfs/files/Images/' + result._id;
          Pages.update({_id: id}, {'$set': {image: image, 'meta.image_id': result._id}});
        }
      });
    }
    return false;
  },
  'click .remove-image': function(){
  	var id = FlowRouter.getParam('id');
  	var page = Pages.findOne({_id: id});
    //remove image 
    Images.remove({_id: page.meta.image_id});
    //update
    Pages.update({_id: id}, {'$set': {image: null, 'meta.image_id': null}});
    return false;
  }
});

AutoForm.hooks({
insertPage: {
    onSuccess: function () {
      FlowRouter.go('admin.pages');
      FlashMessages.sendSuccess('Page Added');
      return false;
    }
  },
  updatePage: {
    onSuccess: function () {
      FlowRouter.go('admin.pages');
      FlashMessages.sendSuccess('Page Updated');
      return false;
    }
  },
});