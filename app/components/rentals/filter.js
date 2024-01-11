import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;
    console.log('query', query);
    console.log('rentals', rentals.length);

    if (query) {
      rentals = rentals.filter((rental) =>
        rental.title.toLowerCase().includes(query.toLowerCase()),
      );
    }

    return rentals;
  }
}
