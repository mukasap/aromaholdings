Template.header_dashboard.events({
	'click .logout': function () {
		 AccountsTemplates.logout();
		 return false;
	}
});

Template.header_master.helpers({
	pages: function () {
		return Pages.find();
	}
});