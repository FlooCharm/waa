import Ember from 'ember';

export function and(params/*, hash*/) {
  var [name, school] = params;

  return name && school;
}

export default Ember.Helper.helper(and);
