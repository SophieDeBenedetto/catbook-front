import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('cats', function(){
    this.route('new')
    this.route('cat', { path: '/:cat_id'})
  });

  this.route('hobbies', function(){
    this.route('hobby', { path: '/:hobby_id'})
  });
});

export default Router;
