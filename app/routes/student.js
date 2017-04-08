import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel () {
		return this.store.findAll('school').then((schools) => {
			this.set('schools', schools);
		})
	},
	model () {
		return {
			schools: this.get('schools'),
			newStudent: this.store.createRecord('student')
		}		
	},
	actions: {
		saveStudent(student) {
			student.save();
		},
		setSchool(school) {
			this.set('controller.model.newStudent.school', school);
		}
	}
});
