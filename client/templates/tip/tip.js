Template.tipList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('allTips');
	});
});


Template.tipList.helpers({
	tip: function () {
		return Tips.find();
	}
});

Template.tipList.events({
	'click .delete': function () {
		Tips.remove({_id: this._id});
		return false;
	}
});

//edit
Template.tipEdit.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
    self.subscribe('images');
		self.subscribe('singleTip', id);

	});
});

Template.tipEdit.helpers({
	tip: function () {
		var id = FlowRouter.getParam('id');
		return Tips.findOne({_id: id});
	}
});

AutoForm.hooks({
  insertTip: {
    onSuccess: function () {
      FlowRouter.go('admin.tip');
      FlashMessages.sendSuccess('Tip Added');
      return false;
    }
  },
  updateTip: {
    onSuccess: function () {
      FlowRouter.go('admin.tip');
      FlashMessages.sendSuccess('Tip Updated');
      return false;
    }
  },
});