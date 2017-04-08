import Ember from 'ember';

export default Ember.Route.extend({
	model () {
		return Ember.RSVP.hash({
			schools: this.store.findAll('school'),
			students: this.store.findAll('student')
		})
	}
});
