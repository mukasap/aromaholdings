Template.feedbackList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('allFeedback');
	});
});


Template.feedbackList.helpers({
	feedback: function () {
		return Feedback.find();
	}
});

Template.feedbackList.events({
	'click .delete': function () {
		Feedback.remove({_id: this._id});
		return false;
	}
});

//edit
Template.feedbackEdit.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
    self.subscribe('images');
		self.subscribe('singleFeedback', id);

	});
});

Template.feedbackEdit.helpers({
	feedback: function () {
		var id = FlowRouter.getParam('id');
		return Feedback.findOne({_id: id});
	}
});

AutoForm.hooks({
insertInquiry: {
    onSuccess: function () {
      FlashMessages.sendSuccess('Our certified technicians will respond right away.');
      return false;
    }
  },
  insertFeedback: {
    onSuccess: function () {
      FlowRouter.go('admin.feedbacks');
      FlashMessages.sendSuccess('Feedback Added');
      return false;
    }
  },
  updateFeedback: {
    onSuccess: function () {
      FlowRouter.go('admin.feedbacks');
      FlashMessages.sendSuccess('Feedback Updated');
      return false;
    }
  },
});