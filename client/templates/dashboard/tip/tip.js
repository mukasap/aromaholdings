Template.adminTips.events({
	'click .delete': function () {
		Tips.remove({_id: this._id});
		return false;
	}
});

AutoForm.hooks({
  insertTip: {
    onSuccess: function () {
      Router.go('admin.tips');
      FlashMessages.sendSuccess('Tip Added');
      return false;
    }
  },
  updateTip: {
    onSuccess: function () {
      Router.go('admin.tips');
      FlashMessages.sendSuccess('Tip Updated');
      return false;
    }
  },
});