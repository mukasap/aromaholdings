Carousel = new Mongo.Collection('carousel');

Schemas.carouselImages = new SimpleSchema({
	_id: {
		type: String,
		label: '_id'
	},
	image: {
		type: String,
		label: 'Image'
	},
	caption: {
		type: String,
		label:'Caption',
		max: 200,
		optional: true,
	    autoform: {
	      placeholder: 'Short (less than 100 characters) statement.'
	    }
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