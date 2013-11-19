App.MessageRoute = Ember.Route.extend({
	/**
	 * Returns a message model
	 * @param  {object} params An object; should contain message_id to identify the specific Message to load
	 * @return {Message}       An instance of a Message model
	 */
	model: function(params) {
		return this.store.find('message', params.message_id);
	},
	setupController: function(controller, message) {
		controller.set('model', message);
	},
	renderTemplate: function(){
		this.render('alooksie/templates/messages/show');
	}
});

App.MessagesRoute = Ember.Route.extend({
	/**
	 * Return a 
	 * @param {object} params [unused here]
	 * @return {array} 		  Should return an array of Message models
	 */
	model: function() {
		return this.store.findAll('message');

	},
	setupController: function(controller, feed) {
		controller.set('model', feed);
	},
	renderTemplate: function() {
		this.render('alooksie/templates/messages/index');
	}
});

App.MessagesNewRoute = Ember.Route.extend({
	model: function(){
		//EMBER Y U KEEP CHANGING???
		//App.Message.createRecord();
		this.store.createRecord('message');
	},
	setupController: function(controller, model){
		controller.set('content', model);
	}
});