Template.adminFeedback.events({
	'click .delete': function () {
		Feedback.remove({_id: this._id});
		return false;
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
      Router.go('admin.feedback');
      FlashMessages.sendSuccess('Feedback Added');
      return false;
    }
  },
  updateFeedback: {
    onSuccess: function () {
      Router.go('admin.feedback');
      FlashMessages.sendSuccess('Feedback Updated');
      return false;
    }
  },
});