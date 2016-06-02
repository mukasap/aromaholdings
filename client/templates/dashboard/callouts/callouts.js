Template.adminCallouts.events({
	'click .delete': function () {
		Callouts.remove({_id: this._id});
		return false;
	}
});

AutoForm.hooks({
insertCallout: {
    onSuccess: function () {
      Router.go('admin.callouts');
      FlashMessages.sendSuccess('Callout Added');
      return false;
    }
  },
  updateCallout: {
    onSuccess: function () {
      Router.go('admin.callouts');
      FlashMessages.sendSuccess('Callout Updated');
      return false;
    }
  },
});