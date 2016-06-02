//Footer
Template.footer.events({
	'click .logout': function () {
		AccountsTemplates.logout();
		return false;
	}
});
