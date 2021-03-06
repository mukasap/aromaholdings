Services = new Mongo.Collection('services');

Services.allow({
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


//populate departments on client
if(Meteor.isClient){
	Meteor.subscribe('allDepartments');
}


Schemas.Service = new SimpleSchema({
	name: {
		type: String,
		label: 'Service Name',
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
	      placeholder: 'Short (less than 1000 characters) statement.',
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
	department: {
		type: String,
		label:'Department',
		allowedValues: function(){
			return Departments.find({}).map(function(d){
				return d._id;
			});
		},
	    autoform: {
	      options: function(){
			return Departments.find({}).map(function(d){
				return {label: d.name, value: d._id};
			});
		}
	    }
	},
	color:{
	    type: String,
	    optional: true,
	    allowedValues: ['blue',  'green', 'maroon', 'navy', 'purple', 'red'],
	    autoform: {
	      options: [
	        {label: "Blue", value: 'blue'},
	        {label: "Green", value: 'green'},
					{label: "Maroon", value: 'maroon'},
					{label: "Navy", value: 'navy'},
					{label: "Purple", value: 'purple'},
	        {label: "Red", value: 'red'}
	      ]
	    }
	},
	featured: {
		type: Boolean,
		optional: true,
		label: 'Features on home Page'
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

Services.attachSchema(Schemas.Service);
