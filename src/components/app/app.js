
import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import './app.css';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John C.', salary: 300, increase: true, id: 1},
        { name: 'Alex M.', salary: 3000, increase: false, id: 2},
        { name: 'Walter B.', salary: 500, increase: false, id: 3},
        { name: 'James T.', salary: 1000, increase: false, id: 4}
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex(elem => elem.id === id);
      // data.splice(index, 1); IT is a wrong way of deleting an element out of the array because of the mutation

      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArray = [...before, ...after]; Firt way of immutable deleting



      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  render() {
    return (
      <div className="app">
        <AppInfo/>

        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
        />
        <EmployeesAddForm/>
      </div>
    )
  }
}

export default App;