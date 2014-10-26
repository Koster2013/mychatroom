
Messages = new Meteor.Collection('messages');

if (Meteor.isClient) {
	Template.messages.messages = function (){
		return Messages.find( {} , { sort: {time: -1} } );
	};
	
	Template.entry.events({'click #senden': function () {
		if (messageBox.value != '') {
			Messages.insert({
				name: mailBox.value,
				message: messageBox.value,
				time: Date.now() });
			}
		}
	});
}





