Callouts = new Mongo.Collection('callouts');

Callouts.allow({ 
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


Schemas.Callout = new SimpleSchema({
	title: {
		type: String,
		label: 'Callout Title',
		max: 200,
	    autoform: {
	      placeholder: 'Short catchy text Ex. Fast Service'
	    }
	},
	body: {
		type: String,
		label:'Body',
		max: 300,
	    autoform: {
	      placeholder: 'Short (less than 200 characters) statement.',
	      rows: 3
	    }
	},
	icon: {
		type: String,
		optional: true,
		autoform: {
	      placeholder: 'Icon eg fa-heart fa-user fa-flask'
	    }
	},
	updatedAt: {
		type: Date,
		autoValue: function(){
			return new Date();
		}
	}
});

Callouts.attachSchema(Schemas.Callout);
