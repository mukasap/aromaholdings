Template.carouselList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('allCarousels');
	});
});


Template.carouselList.helpers({
	services: function () {
		return Carousel.find();
	}
});

Template.carouselList.events({
	'click .delete': function () {
		Carousels.remove({_id: this._id});
		return false;
	}
});

//edit
Template.carouselEdit.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		self.subscribe('singleCarousel', id);
		self.subscribe('images');
	});
});

Template.carouselEdit.helpers({
	carousel: function () {
		var id = FlowRouter.getParam('id');
		return Carousel.findOne({_id: id});
	}
});

Template.carouselEdit.events({
  'submit .upload': function(e){
  	var id = FlowRouter.getParam('id');
    var caption = e.target.caption.value;
    var file = $('#image').get(0).files[0];
    if(file){
      fsFile = new FS.File(file);
      Images.insert(fsFile, function(err, result){
        if(!err){
          var image = '/cfs/files/Images/' + result._id;
          Carousel.update({_id: id}, {'$addToSet': {images: {image: image, caption: caption,  _id: result._id}}});
        }
      });
    }
    e.target.image.value = '';
    e.target.caption.value = '';
    return false;
  },
  'click .remove-image': function(){
    var id = FlowRouter.getParam('id');
    //update BUG!!!!
    Carousel.update({_id: id}, {'$pull': {images:  {_id: this._id}}});
    //remove image 
    Images.remove({_id: this._id});
    
    return false;
  }
});

AutoForm.hooks({
insertCarousel: {
    onSuccess: function () {
       FlowRouter.go('admin.carousel');
      FlashMessages.sendSuccess('Carousel Added');
      return false;
    }
  },
  updateCarousel: {
    onSuccess: function () {
      FlowRouter.go('admin.carousel');
      FlashMessages.sendSuccess('Carousel Updated');
      return false;
    }
  },
});