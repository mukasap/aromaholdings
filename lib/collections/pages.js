Pages = new Mongo.Collection('pages');

Pages.allow({ 
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
		max: 5000,
		autoform: {
	        afFieldInput: {
                type: 'summernote',
                class: 'editor',
                settings: {
                    allowedTags: ['p', 'a', 'ul', 'ol'],
                    toolbar: [
                        ['style', ['bold', 'italic']],
                        ['para', ['ul', 'ol']],
												['insert', ['link']]
                      ]
                }
            }
	    }
	},
    "image._id": {
        type: String
    },
    "image.path": {
        type: String
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
