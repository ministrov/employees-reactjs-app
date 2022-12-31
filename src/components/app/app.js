
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import './app.css';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {
  const data = [
    { name: 'John C.', salary: 300, increase: true, id: 1},
    { name: 'Alex M.', salary: 3000, increase: false, id: 2},
    { name: 'Walter B.', salary: 500, increase: false, id: 3},
    { name: 'James T.', salary: 1000, increase: false, id: 4}
  ];

  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>

      <EmployeesList data={data}/>
      <EmployeesAddForm/>
    </div>
  )
}

export default App;