// Creates an employee object
//
export default function createEmployeesObject(departmentName, employees) {
  const obj = {
    [departmentName]: [...employees],
  };

  return obj;
}
