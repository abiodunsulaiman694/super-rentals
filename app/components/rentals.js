import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { debounce } from '@ember/runloop';

export default class RentalsComponent extends Component {
  @tracked query = '';
  @action
  updateQuery(event) {
    debounce(this, this.setQuery, event.target.value, 1000);
  }

  setQuery(value) {
    this.query = value;
  }
}
