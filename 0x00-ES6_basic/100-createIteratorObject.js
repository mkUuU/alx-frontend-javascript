export default function createIteratorObject(report) {
  // Extract all employees from the report object
  const allEmployees = Object.values(report.allEmployees).flatMap(department => department);

  // Generator function to create iterator
  function* employeeIterator() {
    for (const employee of allEmployees) {
      yield employee;
    }
  }

  // Return the iterator object
  return {
    [Symbol.iterator]: employeeIterator
  };
}
