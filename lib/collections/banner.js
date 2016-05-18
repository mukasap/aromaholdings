Banners = new Mongo.Collection('banners');

//populate departments on client
if(Meteor.isClient){
	Meteor.subscribe('allServices');
}


Schemas.Banner = new SimpleSchema({
	name: {
		type: String,
		label: 'Banner Name',
		max: 200,
	    autoform: {
	      placeholder: 'Banner Name.'
	    }
	},
	image: {
		type: String,
		optional: true
	},
	link: {
		type: String,
		label:'Link',
		optional: true,
		allowedValues: function(){
			return Services.find({}).map(function(s){
				return s.slug;
			});
		},
	    autoform: {
	      options: function(){
			return Services.find({}).map(function(s){
				return {label: s.name, value: s.slug};
			});
		}
	    }
	},
	type:{
	    type: String,
	    optional: true,
	    allowedValues: ['wide', 'small', 'medium', 'micro'],
    autoform: {
      options: [
        {label: "Wide", value: 'wide'},
        {label: "Small", value: 'small'},
        {label: "Medium", value: 'medium'},
        {label: "Micro", value: 'micro'}
      ]
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

Banners.attachSchema(Schemas.Banner);