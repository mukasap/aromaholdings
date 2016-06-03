Feedback = new Mongo.Collection('feedback');

Feedback.allow({ 
	insert: function(){
		return true;
	},
	update: function(){
		return true;
	},
	remove: function(){
		return true;
	}
});


Schemas.Feedback = new SimpleSchema({
	email: {
		type: String,
		label: 'Email Address',
		regEx: SimpleSchema.RegEx.Email,
	    autoform: {
	      placeholder: 'Valid Email Address'
	    }
	},
	telephone: {
		type: String,
		label: 'Telephone Number',
		autoform: {
	      placeholder: 'Telephone number'
	    }
	},
	message: {
		type: String,
		label:'Message',
		max: 1000,
	    autoform: {
	      placeholder: 'Short reason for inqury.',
	      rows: 5
	    }
	},
	read: {
		type: Boolean,
		label: 'Read',
		optional: true,
	},
	updatedAt: {
		type: Date,
		autoValue: function(){
			return new Date();
		}
	}
});

Feedback.attachSchema(Schemas.Feedback);
