Template.header_master.events({
	'click .logout': function () {
		 AccountsTemplates.logout();
	}
});

Template.header_master.helpers({
	pages: function () {
		return Pages.find();
	}
});