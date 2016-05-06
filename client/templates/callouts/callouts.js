Template.calloutList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('allCallouts');
	});
});


Template.calloutList.helpers({
	callouts: function () {
		return Callouts.find();
	}
});

Template.calloutList.events({
	'click .delete': function () {
		Callouts.remove({_id: this._id});
		return false;
	}
});

//edit
Template.calloutEdit.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		self.subscribe('singleCallout', id);
		self.subscribe('images');
	});
});

Template.calloutEdit.helpers({
	callout: function () {
		var id = FlowRouter.getParam('id');
		return Callouts.findOne({_id: id});
	}
});


AutoForm.hooks({
insertCallout: {
    onSuccess: function () {
      FlowRouter.go('admin.callouts');
      FlashMessages.sendSuccess('Callout Added');
      return false;
    }
  },
  updateCallout: {
    onSuccess: function () {
      FlowRouter.go('admin.callouts');
      FlashMessages.sendSuccess('Callout Updated');
      return false;
    }
  },
});