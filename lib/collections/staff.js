//staff
Staff = new Mongo.Collection('staff');

Schemas.Staff = new SimpleSchema({
	name: {
		type: String,
		label: 'Staff Name',
		max: 200,
	    autoform: {
	      placeholder: 'Staff Name.'
	    }
	},
	bio: {
		type: String,
		label:'About Me',
		max: 5000,
		autoform: {
	        afFieldInput: {
                type: 'summernote', 
                class: 'editor',
                settings: {
                    allowedTags: ['p', 'a'],
                    toolbar: [
                        ['style', ['bold', 'italic']],
                        ['para', ['ul', 'ol']]
                      ]
                }
            }
	    }
	},
	experience: {
		type: String,
		label:'Experience',
		optional: true,
		max: 1000,
		autoform: {
	      afFieldInput: {
                type: 'summernote', 
                class: 'editor',
                settings: {
                    allowedTags: ['p', 'a'],
                    toolbar: [
                        ['style', ['bold', 'italic']],
                        ['para', ['ul', 'ol']]
                      ]
                }
            }
	    }
	},
	location: {
		type: String,
		autoform: {
	      placeholder: 'Example: Kampala, Uganda '
	    }
	},
	title: {
		type: String,
		autoform: {
	      placeholder: 'Example: CEO, Accountant, Technicain '
	    }
	},
	image: {
		type: String,
		optional: true
	},
	slug:{
	    type: String,
	    optional: true,
	    autoValue: function() {
	       if (this.field('name').isSet) {
	         return URLify2(this.field('name').value);
	       }
	   }
	},
	updatedAt: {
		type: Date,
		autoValue: function(){
			return new Date();
		}
	},
	'meta.image_id': {
		type: String,
		optional: true
	}
});

Staff.attachSchema(Schemas.Staff);