import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit: function() {
      let properties = this.getProperties(['name', 'breed', 'temperament', 'weight', 'hobbies'])
      this.attrs.triggerSave(properties)
    }
  }
});
