import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = () => {
  return (
    <ul className="app-list group-list">
      <EmployeesListItem name="John C." salary={300}/>
      <EmployeesListItem name="Alex M." salary={3000}/>
      <EmployeesListItem name="Walter B." salary={500}/>
      <EmployeesListItem name="James T." salary={1000}/>
    </ul>
  )
}

export default EmployeesList;