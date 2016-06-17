import Ember from 'ember';

export default Ember.Controller.extend({
  allHobbies: Ember.computed(function(){
   return this.store.findAll('hobby');
  }),

  newHobbies: Ember.computed(function(){
    return [this.store.createRecord('hobby'), this.store.createRecord('hobby'), this.store.createRecord('hobby')]
  }), 

  actions: {
    save(properties){
      let cat = this.get('model')
      cat.setProperties(properties)
      debugger;
      cat.save().then((r)=>{
        this.set('message', 'new cat added!')
        this.toggleProperty('apiReturn')
      }).catch((e)=>{
        this.set('message', 'e')
        this.toggleProperty('apiReturn')
      })
    }
  }
});
