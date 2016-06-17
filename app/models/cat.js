import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  breed: attr(),
  weight: attr(),
  temperament: attr(),
  hobbies: hasMany('hobby', {embedded: 'always'}) 
});
