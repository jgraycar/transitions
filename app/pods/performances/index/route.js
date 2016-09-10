import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('performance');
  },

  actions: {
    create() {
      this.transitionTo('performances.new');
    },
  },
});
