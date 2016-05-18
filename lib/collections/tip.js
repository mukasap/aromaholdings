Tips = new Mongo.Collection('tips');
//populate services on client
if(Meteor.isClient){
	Meteor.subscribe('allServices');
}
Schemas.Tip = new SimpleSchema({
	title: {
		type: String,
		label: 'Tip Title',
		max: 200,
	    autoform: {
	      placeholder: 'Tip Title.'
	    }
	},
	service: {
		type: String,
		label:'Service',
		optional: true,
		allowedValues: function(){
			return Services.find({}).map(function(s){
				return s._id;
			});
		},
	    autoform: {
	      options: function(){
			return Services.find({}).map(function(s){
				return {label: s.name, value: s._id};
			});
		}
	    }
	},
	tip: {
		type: String,
		label:'Body',
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
	slug:{
	    type: String,
	    optional: true,
	    autoValue: function() {
	       if (this.field('tip').isSet) {
	         return URLify2(this.field('tip').value);
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

Tips.attachSchema(Schemas.Tip);