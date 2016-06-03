Template.adminCarousel.events({
	'click .delete': function () {
		Carousel.remove({_id: this._id});
		return false;
	}
});

Template.adminCarouselEdit.events({
  'submit .upload': function(e){
  	var id = this._id;
    var caption = e.target.caption.value;
    var file = $('#image').get(0).files[0];
    if(file){
      fsFile = new FS.File(file);
      Images.insert(fsFile, function(err, result){
        if(!err){
          var image = '/cfs/files/Images/' + result._id;
          Carousel.update({_id: id}, {'$addToSet': {images: {image: image, _id: result._id}}});
        }
      });
    }
    e.target.image.value = '';
    e.target.caption.value = '';
    return false;
  },
  'click .remove-image': function(e){
    var id = Router.current().params._id;
		//remove from carousel
    Carousel.update({_id: id}, {'$pull': {images:  {_id: this._id}}});
    //remove image
    Images.remove({_id: this._id});

    return false;
  }
});

AutoForm.hooks({
insertCarousel: {
    onSuccess: function () {
      this.event.preventDefault();
      Router.go('admin.carousel');
      FlashMessages.sendSuccess('Carousel Added');
    }
  },
  updateCarousel: {
    onSuccess: function () {
      this.event.preventDefault();
      Router.go('admin.carousel');
      FlashMessages.sendSuccess('Carousel Updated');
    }
  },
});
