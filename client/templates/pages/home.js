//Carousel
Template.home.onCreated(function(){
  this.autorun(() => {
    this.subscribe("homeCarousel");
    this.subscribe("allCallouts");
    this.subscribe("randomTip");
    this.subscribe('featuredServices');
    this.subscribe('aboutPage');
  });
});

Template.home.helpers({
  carousel: function(){
    return Carousel.findOne({name: 'home'});
  },
  callouts: function(){
    return Callouts.find({});
  },
  tips: function(){
    return Tips.find({});
  },
  services: function(){
		return Services.find({featured: true}, {limit: 3});
	},
  about: function(){
		return Pages.find({});
	}
});

Template.Banner768.onCreated(function(){
	this.autorun(() => {
    this.subscribe('wideBanner');
  });
});

Template.Banner768.helpers({
	banner: function(){
		return Banners.find({type: 'wide'}, {limit: 1});
	}
});
