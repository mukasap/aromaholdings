Carousel = new Mongo.Collection('carousel');

Carousel.allow({
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


Schemas.carouselImages = new SimpleSchema({
	_id: {
		type: String,
		label: '_id'
	},
	image: {
		type: String,
		label: 'Image'
	}
});

Schemas.Carousel = new SimpleSchema({
	name: {
		type: String,
		label: 'name',
		max: 200,
	    autoform: {
	      placeholder: 'Carousel Name (unique identifier).'
	    }
	},
	heading: {
		type: String,
		label:'Heading',
		max: 200,
	    autoform: {
	      placeholder: 'Short (less than 100 characters) statement.'
	    }
	},
	images: {
		type: [Schemas.carouselImages],
		optional: true
	},
	updatedAt: {
		type: Date,
		autoValue: function(){
			return new Date();
		}
	}
});

Carousel.attachSchema(Schemas.Carousel);
