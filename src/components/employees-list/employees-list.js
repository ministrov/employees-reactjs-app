import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({ data, onDelete }) => {

  const elements = data.map(item => {
    // return <EmployeesListItem name={item.name} salary={item.salary} increase={item.increase} key={item.id}/>
    const { id, ...itemProps } = item;

    return (
      <EmployeesListItem
        key={id}
        { ...itemProps}
        onDelete={() => onDelete(id)}
      />
    )
  });

  return (
    <ul className="app-list group-list">
      { elements }
    </ul>
  )
}

export default EmployeesList;