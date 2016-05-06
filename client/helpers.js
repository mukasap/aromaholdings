//Truncate text
UI.registerHelper('truncate', function(text, length){
	var output = text.substring(0, length);
	output = output.substr(0, Math.min(output.length, output.lastIndexOf(" ")));
	return new Spacebars.SafeString(output);
});

UI.registerHelper('prettyDate', function(time, type) {
  switch(type){
    case 'fromNow':
      return moment(time).fromNow();
    case 'long':
      return moment(time).format('MMMM D YYYY');
    //TODO: Add other types long etc
    default:
      return moment(time).format("DD/MM/YYYY");
  }
});

UI.registerHelper('currentDate', function() {
  return moment(new Date()).format("DD/MM/YYYY");
});

UI.registerHelper('currentRoute', function(route){
  return Router.current().route.getName() === route;
});


