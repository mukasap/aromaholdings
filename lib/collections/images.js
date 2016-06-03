//product images
Images = new FS.Collection('Images', {
	stores: [new FS.Store.GridFS('Images')]
});

Images.allow({
	insert: function (fileId, doc) {
		return true;
	},
	download: function (fileId, doc) {
		return true;
	},
	remove: function(){
		return true;
	}
});
