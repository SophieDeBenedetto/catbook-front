import Ember from 'ember';

export default Ember.Controller.extend({
  allHobbies: Ember.computed(function(){
   return this.store.findAll('hobby');
  }),

  actions: {
    toggleModal: function() {
      this.toggleProperty('enabled'); 
      let cat = this.store.createRecord('cat')
      // let hobby = this.store.createRecord('hobby')
      // cat.set('hobbies', [hobby])
      this.set('newCat', cat)
      // debugger;
    }
  }
});
