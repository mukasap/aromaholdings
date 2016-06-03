//departments
Departments = new Mongo.Collection('departments');

Departments.allow({
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
