import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr("string"),
	school: DS.belongsTo('school'),
	canSaveStudent : Ember.computed('name', 'school', function () {
		return this.get('name') && this.get('school');
	})
});
