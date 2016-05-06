Pages = new Mongo.Collection('pages');

Schemas.Page = new SimpleSchema({
	title: {
		type: String,
		label: 'Page Title',
		max: 200,
	    autoform: {
	      placeholder: 'Page Title.'
	    }
	},
	body: {
		type: String,
		label:'Body',
		max: 1000,
		autoValue: function(){
          return Meteor.isServer ? sanitizeHtml( this.value ) : this.value;
        },
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
	image: {
		type: String,
		optional: true
	},
	slug:{
	    type: String,
	    optional: true,
	    autoValue: function() {
	       if (this.field('title').isSet) {
	         return URLify2(this.field('title').value);
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

Pages.attachSchema(Schemas.Page);