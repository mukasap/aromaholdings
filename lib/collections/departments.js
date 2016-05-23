//departments
Departments = new Mongo.Collection('departments');

Schemas.Department = new SimpleSchema({
	name: {
		type: String,
		label: 'Department Name',
		max: 200,
	    autoform: {
	      placeholder: 'Service Name.'
	    }
	},
	desc: {
		type: String,
		label:'Description',
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
	services:{
		type: [Object],
		optional:true
	},
	"services.$.slug": {
        type: String
    },
    "services.$.name": {
        type: String
    },
    "thumbnail._id": {
        type: String
    },
    "thumbnail.path": {
        type: String
    },
    "image._id": {
        type: String
    },
    "image.path": {
        type: String
    },
	order:{
	    type: String,
	    optional: true,
	},
	color:{
	    type: String,
	    optional: true,
	    allowedValues: ['blue', 'maroon', 'green', 'purple'],
	    autoform: {
	      options: [
	        {label: "Blue", value: 'blue'},
	        {label: "Maroon", value: 'maroon'},
	        {label: "Green", value: 'green'},
	        {label: "Purple", value: 'purple'}
	      ]
	    }
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
	}
});

Departments.attachSchema(Schemas.Department);